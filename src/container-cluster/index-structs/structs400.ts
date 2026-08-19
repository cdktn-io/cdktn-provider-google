/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { ContainerClusterNodeConfigEffectiveTaintsList,
ContainerClusterNodeConfigAdvancedMachineFeatures,
containerClusterNodeConfigAdvancedMachineFeaturesToTerraform,
containerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform,
ContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference,
ContainerClusterNodeConfigBootDisk,
containerClusterNodeConfigBootDiskToTerraform,
containerClusterNodeConfigBootDiskToHclTerraform,
ContainerClusterNodeConfigBootDiskOutputReference,
ContainerClusterNodeConfigConfidentialNodes,
containerClusterNodeConfigConfidentialNodesToTerraform,
containerClusterNodeConfigConfidentialNodesToHclTerraform,
ContainerClusterNodeConfigConfidentialNodesOutputReference,
ContainerClusterNodeConfigContainerdConfig,
containerClusterNodeConfigContainerdConfigToTerraform,
containerClusterNodeConfigContainerdConfigToHclTerraform,
ContainerClusterNodeConfigContainerdConfigOutputReference,
ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig,
containerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform,
containerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform,
ContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference,
ContainerClusterNodeConfigFastSocket,
containerClusterNodeConfigFastSocketToTerraform,
containerClusterNodeConfigFastSocketToHclTerraform,
ContainerClusterNodeConfigFastSocketOutputReference,
ContainerClusterNodeConfigGcfsConfig,
containerClusterNodeConfigGcfsConfigToTerraform,
containerClusterNodeConfigGcfsConfigToHclTerraform,
ContainerClusterNodeConfigGcfsConfigOutputReference,
ContainerClusterNodeConfigGuestAccelerator,
containerClusterNodeConfigGuestAcceleratorToTerraform,
containerClusterNodeConfigGuestAcceleratorToHclTerraform,
ContainerClusterNodeConfigGuestAcceleratorList,
ContainerClusterNodeConfigGvnic,
containerClusterNodeConfigGvnicToTerraform,
containerClusterNodeConfigGvnicToHclTerraform,
ContainerClusterNodeConfigGvnicOutputReference,
ContainerClusterNodeConfigHostMaintenancePolicy,
containerClusterNodeConfigHostMaintenancePolicyToTerraform,
containerClusterNodeConfigHostMaintenancePolicyToHclTerraform,
ContainerClusterNodeConfigHostMaintenancePolicyOutputReference,
ContainerClusterNodeConfigKubeletConfig,
containerClusterNodeConfigKubeletConfigToTerraform,
containerClusterNodeConfigKubeletConfigToHclTerraform,
ContainerClusterNodeConfigKubeletConfigOutputReference,
ContainerClusterNodeConfigLinuxNodeConfig,
containerClusterNodeConfigLinuxNodeConfigToTerraform,
containerClusterNodeConfigLinuxNodeConfigToHclTerraform,
ContainerClusterNodeConfigLinuxNodeConfigOutputReference,
ContainerClusterNodeConfigLocalNvmeSsdBlockConfig,
containerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform,
containerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform,
ContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference,
ContainerClusterNodeConfigNodeImageConfig,
containerClusterNodeConfigNodeImageConfigToTerraform,
containerClusterNodeConfigNodeImageConfigToHclTerraform,
ContainerClusterNodeConfigNodeImageConfigList,
ContainerClusterNodeConfigReservationAffinity,
containerClusterNodeConfigReservationAffinityToTerraform,
containerClusterNodeConfigReservationAffinityToHclTerraform,
ContainerClusterNodeConfigReservationAffinityOutputReference,
ContainerClusterNodeConfigSandboxConfig,
containerClusterNodeConfigSandboxConfigToTerraform,
containerClusterNodeConfigSandboxConfigToHclTerraform,
ContainerClusterNodeConfigSandboxConfigOutputReference,
ContainerClusterNodeConfigSecondaryBootDisks,
containerClusterNodeConfigSecondaryBootDisksToTerraform,
containerClusterNodeConfigSecondaryBootDisksToHclTerraform,
ContainerClusterNodeConfigSecondaryBootDisksList,
ContainerClusterNodeConfigShieldedInstanceConfig,
containerClusterNodeConfigShieldedInstanceConfigToTerraform,
containerClusterNodeConfigShieldedInstanceConfigToHclTerraform,
ContainerClusterNodeConfigShieldedInstanceConfigOutputReference,
ContainerClusterNodeConfigSoleTenantConfig,
containerClusterNodeConfigSoleTenantConfigToTerraform,
containerClusterNodeConfigSoleTenantConfigToHclTerraform,
ContainerClusterNodeConfigSoleTenantConfigOutputReference } from './structs0';
export interface ContainerClusterNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#effect ContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#value ContainerCluster#value}
  */
  readonly value: string;
}

export function containerClusterNodeConfigTaintToTerraform(struct?: ContainerClusterNodeConfigTaint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    effect: cdktn.stringToTerraform(struct!.effect),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function containerClusterNodeConfigTaintToHclTerraform(struct?: ContainerClusterNodeConfigTaint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodeConfigTaintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodeConfigTaint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodeConfigTaint | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodeConfigTaintList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodeConfigTaint[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodeConfigTaintOutputReference {
    return new ContainerClusterNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigTaintConfig {
  /**
  * Architecture taint behavior. Controls, how we apply taints based on the node architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#architecture_taint_behavior ContainerCluster#architecture_taint_behavior}
  */
  readonly architectureTaintBehavior: string;
}

export function containerClusterNodeConfigTaintConfigToTerraform(struct?: ContainerClusterNodeConfigTaintConfigOutputReference | ContainerClusterNodeConfigTaintConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    architecture_taint_behavior: cdktn.stringToTerraform(struct!.architectureTaintBehavior),
  }
}


export function containerClusterNodeConfigTaintConfigToHclTerraform(struct?: ContainerClusterNodeConfigTaintConfigOutputReference | ContainerClusterNodeConfigTaintConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    architecture_taint_behavior: {
      value: cdktn.stringToHclTerraform(struct!.architectureTaintBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigTaintConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigTaintConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectureTaintBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectureTaintBehavior = this._architectureTaintBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigTaintConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architectureTaintBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architectureTaintBehavior = value.architectureTaintBehavior;
    }
  }

  // architecture_taint_behavior - computed: false, optional: false, required: true
  private _architectureTaintBehavior?: string; 
  public get architectureTaintBehavior() {
    return this.getStringAttribute('architecture_taint_behavior');
  }
  public set architectureTaintBehavior(value: string) {
    this._architectureTaintBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureTaintBehaviorInput() {
    return this._architectureTaintBehavior;
  }
}
export interface ContainerClusterNodeConfigWindowsNodeConfig {
  /**
  * The OS Version of the windows nodepool.Values are OS_VERSION_UNSPECIFIED,OS_VERSION_LTSC2019 and OS_VERSION_LTSC2022
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#osversion ContainerCluster#osversion}
  */
  readonly osversion?: string;
}

export function containerClusterNodeConfigWindowsNodeConfigToTerraform(struct?: ContainerClusterNodeConfigWindowsNodeConfigOutputReference | ContainerClusterNodeConfigWindowsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    osversion: cdktn.stringToTerraform(struct!.osversion),
  }
}


export function containerClusterNodeConfigWindowsNodeConfigToHclTerraform(struct?: ContainerClusterNodeConfigWindowsNodeConfigOutputReference | ContainerClusterNodeConfigWindowsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodeConfigWindowsNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osversion = this._osversion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigWindowsNodeConfig | undefined) {
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
export interface ContainerClusterNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode: string;
}

export function containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function containerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodeConfigWorkloadMetadataConfig): any {
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

export class ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigWorkloadMetadataConfig | undefined) {
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
export interface ContainerClusterNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#boot_disk_kms_key ContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disk_size_gb ContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_confidential_storage ContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktn.IResolvable;
  /**
  * Enables Flex Start provisioning model for the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#flex_start ContainerCluster#flex_start}
  */
  readonly flexStart?: boolean | cdktn.IResolvable;
  /**
  * The type of GPUDirect strategy to enable on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gpudirect_strategy ContainerCluster#gpudirect_strategy}
  */
  readonly gpudirectStrategy?: string;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#labels ContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#local_ssd_encryption_mode ContainerCluster#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#logging_variant ContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#machine_type ContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_run_duration ContainerCluster#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#metadata ContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_group ContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#preemptible ContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktn.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#resource_labels ContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#resource_manager_tags ContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#spot ContainerCluster#spot}
  */
  readonly spot?: boolean | cdktn.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#storage_pools ContainerCluster#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#advanced_machine_features ContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ContainerClusterNodeConfigAdvancedMachineFeatures;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#boot_disk ContainerCluster#boot_disk}
  */
  readonly bootDisk?: ContainerClusterNodeConfigBootDisk;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#confidential_nodes ContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: ContainerClusterNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#containerd_config ContainerCluster#containerd_config}
  */
  readonly containerdConfig?: ContainerClusterNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#ephemeral_storage_local_ssd_config ContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#fast_socket ContainerCluster#fast_socket}
  */
  readonly fastSocket?: ContainerClusterNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcfs_config ContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: ContainerClusterNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#guest_accelerator ContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerClusterNodeConfigGuestAccelerator[] | cdktn.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gvnic ContainerCluster#gvnic}
  */
  readonly gvnic?: ContainerClusterNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#host_maintenance_policy ContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: ContainerClusterNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#kubelet_config ContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: ContainerClusterNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#linux_node_config ContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: ContainerClusterNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#local_nvme_ssd_block_config ContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: ContainerClusterNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * node_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_image_config ContainerCluster#node_image_config}
  */
  readonly nodeImageConfig?: ContainerClusterNodeConfigNodeImageConfig[] | cdktn.IResolvable;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#reservation_affinity ContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: ContainerClusterNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#sandbox_config ContainerCluster#sandbox_config}
  */
  readonly sandboxConfig?: ContainerClusterNodeConfigSandboxConfig;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#secondary_boot_disks ContainerCluster#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: ContainerClusterNodeConfigSecondaryBootDisks[] | cdktn.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#sole_tenant_config ContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: ContainerClusterNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#taint ContainerCluster#taint}
  */
  readonly taint?: ContainerClusterNodeConfigTaint[] | cdktn.IResolvable;
  /**
  * taint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#taint_config ContainerCluster#taint_config}
  */
  readonly taintConfig?: ContainerClusterNodeConfigTaintConfig;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#windows_node_config ContainerCluster#windows_node_config}
  */
  readonly windowsNodeConfig?: ContainerClusterNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#workload_metadata_config ContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerClusterNodeConfigWorkloadMetadataConfig;
}

export function containerClusterNodeConfigToTerraform(struct?: ContainerClusterNodeConfigOutputReference | ContainerClusterNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_kms_key: cdktn.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktn.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktn.booleanToTerraform(struct!.enableConfidentialStorage),
    flex_start: cdktn.booleanToTerraform(struct!.flexStart),
    gpudirect_strategy: cdktn.stringToTerraform(struct!.gpudirectStrategy),
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
    advanced_machine_features: containerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    boot_disk: containerClusterNodeConfigBootDiskToTerraform(struct!.bootDisk),
    confidential_nodes: containerClusterNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: containerClusterNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_local_ssd_config: containerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: containerClusterNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: containerClusterNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktn.listMapper(containerClusterNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: containerClusterNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: containerClusterNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: containerClusterNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: containerClusterNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: containerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    node_image_config: cdktn.listMapper(containerClusterNodeConfigNodeImageConfigToTerraform, true)(struct!.nodeImageConfig),
    reservation_affinity: containerClusterNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: containerClusterNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    secondary_boot_disks: cdktn.listMapper(containerClusterNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: containerClusterNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: containerClusterNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktn.listMapper(containerClusterNodeConfigTaintToTerraform, true)(struct!.taint),
    taint_config: containerClusterNodeConfigTaintConfigToTerraform(struct!.taintConfig),
    windows_node_config: containerClusterNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function containerClusterNodeConfigToHclTerraform(struct?: ContainerClusterNodeConfigOutputReference | ContainerClusterNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    gpudirect_strategy: {
      value: cdktn.stringToHclTerraform(struct!.gpudirectStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: containerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigAdvancedMachineFeaturesList",
    },
    boot_disk: {
      value: containerClusterNodeConfigBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigBootDiskList",
    },
    confidential_nodes: {
      value: containerClusterNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: containerClusterNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigContainerdConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: containerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: containerClusterNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: containerClusterNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktn.listMapperHcl(containerClusterNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: containerClusterNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: containerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: containerClusterNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: containerClusterNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: containerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigLocalNvmeSsdBlockConfigList",
    },
    node_image_config: {
      value: cdktn.listMapperHcl(containerClusterNodeConfigNodeImageConfigToHclTerraform, true)(struct!.nodeImageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigNodeImageConfigList",
    },
    reservation_affinity: {
      value: containerClusterNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: containerClusterNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigSandboxConfigList",
    },
    secondary_boot_disks: {
      value: cdktn.listMapperHcl(containerClusterNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: containerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: containerClusterNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktn.listMapperHcl(containerClusterNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigTaintList",
    },
    taint_config: {
      value: containerClusterNodeConfigTaintConfigToHclTerraform(struct!.taintConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigTaintConfigList",
    },
    windows_node_config: {
      value: containerClusterNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: containerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfig | undefined {
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
    if (this._gpudirectStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpudirectStrategy = this._gpudirectStrategy;
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
    if (this._nodeImageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeImageConfig = this._nodeImageConfig?.internalValue;
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
    if (this._taintConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taintConfig = this._taintConfig?.internalValue;
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

  public set internalValue(value: ContainerClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._flexStart = undefined;
      this._gpudirectStrategy = undefined;
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
      this._nodeImageConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._taintConfig.internalValue = undefined;
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
      this._gpudirectStrategy = value.gpudirectStrategy;
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
      this._nodeImageConfig.internalValue = value.nodeImageConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._taintConfig.internalValue = value.taintConfig;
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
  private _effectiveTaints = new ContainerClusterNodeConfigEffectiveTaintsList(this, "effective_taints", false);
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

  // gpudirect_strategy - computed: true, optional: true, required: false
  private _gpudirectStrategy?: string; 
  public get gpudirectStrategy() {
    return this.getStringAttribute('gpudirect_strategy');
  }
  public set gpudirectStrategy(value: string) {
    this._gpudirectStrategy = value;
  }
  public resetGpudirectStrategy() {
    this._gpudirectStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpudirectStrategyInput() {
    return this._gpudirectStrategy;
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
  private _advancedMachineFeatures = new ContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: ContainerClusterNodeConfigAdvancedMachineFeatures) {
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
  private _bootDisk = new ContainerClusterNodeConfigBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: ContainerClusterNodeConfigBootDisk) {
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
  private _confidentialNodes = new ContainerClusterNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: ContainerClusterNodeConfigConfidentialNodes) {
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
  private _containerdConfig = new ContainerClusterNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: ContainerClusterNodeConfigContainerdConfig) {
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
  private _ephemeralStorageLocalSsdConfig = new ContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig) {
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
  private _fastSocket = new ContainerClusterNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: ContainerClusterNodeConfigFastSocket) {
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
  private _gcfsConfig = new ContainerClusterNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerClusterNodeConfigGcfsConfig) {
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
  private _guestAccelerator = new ContainerClusterNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ContainerClusterNodeConfigGuestAccelerator[] | cdktn.IResolvable) {
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
  private _gvnic = new ContainerClusterNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: ContainerClusterNodeConfigGvnic) {
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
  private _hostMaintenancePolicy = new ContainerClusterNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: ContainerClusterNodeConfigHostMaintenancePolicy) {
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
  private _kubeletConfig = new ContainerClusterNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: ContainerClusterNodeConfigKubeletConfig) {
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
  private _linuxNodeConfig = new ContainerClusterNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: ContainerClusterNodeConfigLinuxNodeConfig) {
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
  private _localNvmeSsdBlockConfig = new ContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: ContainerClusterNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // node_image_config - computed: false, optional: true, required: false
  private _nodeImageConfig = new ContainerClusterNodeConfigNodeImageConfigList(this, "node_image_config", false);
  public get nodeImageConfig() {
    return this._nodeImageConfig;
  }
  public putNodeImageConfig(value: ContainerClusterNodeConfigNodeImageConfig[] | cdktn.IResolvable) {
    this._nodeImageConfig.internalValue = value;
  }
  public resetNodeImageConfig() {
    this._nodeImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageConfigInput() {
    return this._nodeImageConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ContainerClusterNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ContainerClusterNodeConfigReservationAffinity) {
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
  private _sandboxConfig = new ContainerClusterNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: ContainerClusterNodeConfigSandboxConfig) {
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
  private _secondaryBootDisks = new ContainerClusterNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: ContainerClusterNodeConfigSecondaryBootDisks[] | cdktn.IResolvable) {
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
  private _shieldedInstanceConfig = new ContainerClusterNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ContainerClusterNodeConfigShieldedInstanceConfig) {
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
  private _soleTenantConfig = new ContainerClusterNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: ContainerClusterNodeConfigSoleTenantConfig) {
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
  private _taint = new ContainerClusterNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: ContainerClusterNodeConfigTaint[] | cdktn.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // taint_config - computed: false, optional: true, required: false
  private _taintConfig = new ContainerClusterNodeConfigTaintConfigOutputReference(this, "taint_config");
  public get taintConfig() {
    return this._taintConfig;
  }
  public putTaintConfig(value: ContainerClusterNodeConfigTaintConfig) {
    this._taintConfig.internalValue = value;
  }
  public resetTaintConfig() {
    this._taintConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintConfigInput() {
    return this._taintConfig.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new ContainerClusterNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: ContainerClusterNodeConfigWindowsNodeConfig) {
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
  private _workloadMetadataConfig = new ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: ContainerClusterNodeConfigWorkloadMetadataConfig) {
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
export interface ContainerClusterNodeCreationConfig {
  /**
  * NodeCreationMode defines the settings of node creation mode.
  *  Accepted values are:
  * * VIA_KUBELET: Kubelet registers itself.
  * * VIA_CONTROL_PLANE: gcp-controller-manager automatically creates the node object after CSR approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_creation_mode ContainerCluster#node_creation_mode}
  */
  readonly nodeCreationMode: string;
}

export function containerClusterNodeCreationConfigToTerraform(struct?: ContainerClusterNodeCreationConfigOutputReference | ContainerClusterNodeCreationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_creation_mode: cdktn.stringToTerraform(struct!.nodeCreationMode),
  }
}


export function containerClusterNodeCreationConfigToHclTerraform(struct?: ContainerClusterNodeCreationConfigOutputReference | ContainerClusterNodeCreationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_creation_mode: {
      value: cdktn.stringToHclTerraform(struct!.nodeCreationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeCreationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeCreationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCreationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCreationMode = this._nodeCreationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeCreationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCreationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCreationMode = value.nodeCreationMode;
    }
  }

  // node_creation_mode - computed: false, optional: false, required: true
  private _nodeCreationMode?: string; 
  public get nodeCreationMode() {
    return this.getStringAttribute('node_creation_mode');
  }
  public set nodeCreationMode(value: string) {
    this._nodeCreationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCreationModeInput() {
    return this._nodeCreationMode;
  }
}
export interface ContainerClusterNodePoolAutoscaling {
  /**
  * Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#location_policy ContainerCluster#location_policy}
  */
  readonly locationPolicy?: string;
  /**
  * Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_node_count ContainerCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#min_node_count ContainerCluster#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#total_max_node_count ContainerCluster#total_max_node_count}
  */
  readonly totalMaxNodeCount?: number;
  /**
  * Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#total_min_node_count ContainerCluster#total_min_node_count}
  */
  readonly totalMinNodeCount?: number;
}

export function containerClusterNodePoolAutoscalingToTerraform(struct?: ContainerClusterNodePoolAutoscalingOutputReference | ContainerClusterNodePoolAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location_policy: cdktn.stringToTerraform(struct!.locationPolicy),
    max_node_count: cdktn.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktn.numberToTerraform(struct!.minNodeCount),
    total_max_node_count: cdktn.numberToTerraform(struct!.totalMaxNodeCount),
    total_min_node_count: cdktn.numberToTerraform(struct!.totalMinNodeCount),
  }
}


export function containerClusterNodePoolAutoscalingToHclTerraform(struct?: ContainerClusterNodePoolAutoscalingOutputReference | ContainerClusterNodePoolAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoscaling | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolAutoscaling | undefined) {
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
export interface ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport {
  /**
  * Whether to enable the maintenance exclusion until the end of support for this NodePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportToTerraform(struct?: ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportToHclTerraform(struct?: ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportOutputReference {
    return new ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolMaintenancePolicy {
  /**
  * exclusion_until_end_of_support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#exclusion_until_end_of_support ContainerCluster#exclusion_until_end_of_support}
  */
  readonly exclusionUntilEndOfSupport?: ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport[] | cdktn.IResolvable;
}

export function containerClusterNodePoolMaintenancePolicyToTerraform(struct?: ContainerClusterNodePoolMaintenancePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_until_end_of_support: cdktn.listMapper(containerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportToTerraform, true)(struct!.exclusionUntilEndOfSupport),
  }
}


export function containerClusterNodePoolMaintenancePolicyToHclTerraform(struct?: ContainerClusterNodePoolMaintenancePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_until_end_of_support: {
      value: cdktn.listMapperHcl(containerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportToHclTerraform, true)(struct!.exclusionUntilEndOfSupport),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolMaintenancePolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolMaintenancePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionUntilEndOfSupport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionUntilEndOfSupport = this._exclusionUntilEndOfSupport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolMaintenancePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionUntilEndOfSupport.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionUntilEndOfSupport.internalValue = value.exclusionUntilEndOfSupport;
    }
  }

  // exclusion_until_end_of_support - computed: false, optional: true, required: false
  private _exclusionUntilEndOfSupport = new ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupportList(this, "exclusion_until_end_of_support", false);
  public get exclusionUntilEndOfSupport() {
    return this._exclusionUntilEndOfSupport;
  }
  public putExclusionUntilEndOfSupport(value: ContainerClusterNodePoolMaintenancePolicyExclusionUntilEndOfSupport[] | cdktn.IResolvable) {
    this._exclusionUntilEndOfSupport.internalValue = value;
  }
  public resetExclusionUntilEndOfSupport() {
    this._exclusionUntilEndOfSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionUntilEndOfSupportInput() {
    return this._exclusionUntilEndOfSupport.internalValue;
  }
}

export class ContainerClusterNodePoolMaintenancePolicyList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolMaintenancePolicy[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolMaintenancePolicyOutputReference {
    return new ContainerClusterNodePoolMaintenancePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#auto_repair ContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktn.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#auto_upgrade ContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolManagementToTerraform(struct?: ContainerClusterNodePoolManagementOutputReference | ContainerClusterNodePoolManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_repair: cdktn.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktn.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function containerClusterNodePoolManagementToHclTerraform(struct?: ContainerClusterNodePoolManagementOutputReference | ContainerClusterNodePoolManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolManagement | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolManagement | undefined) {
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
export interface ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs {
  /**
  * Name of the VPC where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#network ContainerCluster#network}
  */
  readonly network?: string;
  /**
  * Name of the subnetwork where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#subnetwork ContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function containerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform(struct?: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network: cdktn.stringToTerraform(struct!.network),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
  }
}


export function containerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktn.IResolvable): any {
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

export class ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference {
    return new ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs {
  /**
  * The maximum number of pods per node which use this pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_pods_per_node ContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the secondary range on the subnet which provides IP address for this pod range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#secondary_pod_range ContainerCluster#secondary_pod_range}
  */
  readonly secondaryPodRange?: string;
  /**
  * Name of the subnetwork where the additional pod network belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#subnetwork ContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function containerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform(struct?: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pods_per_node: cdktn.numberToTerraform(struct!.maxPodsPerNode),
    secondary_pod_range: cdktn.stringToTerraform(struct!.secondaryPodRange),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
  }
}


export function containerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference {
    return new ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig {
  /**
  * Specifies the total network bandwidth tier for the NodePool. [Valid values](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.Tier) include: "TIER_1" and "TIER_UNSPECIFIED".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#total_egress_bandwidth_tier ContainerCluster#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function containerClusterNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct?: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    total_egress_bandwidth_tier: cdktn.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function containerClusterNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig): any {
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

export class ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig | undefined) {
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
export interface ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct?: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function containerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined) {
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
export interface ContainerClusterNodePoolNetworkConfig {
  /**
  * The accelerator network profile to use for this node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#accelerator_network_profile ContainerCluster#accelerator_network_profile}
  */
  readonly acceleratorNetworkProfile?: string;
  /**
  * Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#create_pod_range ContainerCluster#create_pod_range}
  */
  readonly createPodRange?: boolean | cdktn.IResolvable;
  /**
  * Whether nodes have internal IP addresses only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_private_nodes ContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktn.IResolvable;
  /**
  * The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pod_ipv4_cidr_block ContainerCluster#pod_ipv4_cidr_block}
  */
  readonly podIpv4CidrBlock?: string;
  /**
  * The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pod_range ContainerCluster#pod_range}
  */
  readonly podRange?: string;
  /**
  * The subnetwork name/path for the node pool. Format: subnetwork or projects/{project}/regions/{region}/subnetworks/{subnetwork}. This value may be specified via the nested network_config block (setting this attribute directly is supported for backward compatibility). Once created the node pool's subnetwork is immutable. If not set, the provider/API will choose the subnetwork (e.g. based on IP utilization) and report it here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#subnetwork ContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * additional_node_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#additional_node_network_configs ContainerCluster#additional_node_network_configs}
  */
  readonly additionalNodeNetworkConfigs?: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktn.IResolvable;
  /**
  * additional_pod_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#additional_pod_network_configs ContainerCluster#additional_pod_network_configs}
  */
  readonly additionalPodNetworkConfigs?: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktn.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#network_performance_config ContainerCluster#network_performance_config}
  */
  readonly networkPerformanceConfig?: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig;
  /**
  * pod_cidr_overprovision_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pod_cidr_overprovision_config ContainerCluster#pod_cidr_overprovision_config}
  */
  readonly podCidrOverprovisionConfig?: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig;
}

export function containerClusterNodePoolNetworkConfigToTerraform(struct?: ContainerClusterNodePoolNetworkConfigOutputReference | ContainerClusterNodePoolNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_network_profile: cdktn.stringToTerraform(struct!.acceleratorNetworkProfile),
    create_pod_range: cdktn.booleanToTerraform(struct!.createPodRange),
    enable_private_nodes: cdktn.booleanToTerraform(struct!.enablePrivateNodes),
    pod_ipv4_cidr_block: cdktn.stringToTerraform(struct!.podIpv4CidrBlock),
    pod_range: cdktn.stringToTerraform(struct!.podRange),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
    additional_node_network_configs: cdktn.listMapper(containerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform, true)(struct!.additionalNodeNetworkConfigs),
    additional_pod_network_configs: cdktn.listMapper(containerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform, true)(struct!.additionalPodNetworkConfigs),
    network_performance_config: containerClusterNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct!.networkPerformanceConfig),
    pod_cidr_overprovision_config: containerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct!.podCidrOverprovisionConfig),
  }
}


export function containerClusterNodePoolNetworkConfigToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigOutputReference | ContainerClusterNodePoolNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(containerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform, true)(struct!.additionalNodeNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList",
    },
    additional_pod_network_configs: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform, true)(struct!.additionalPodNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList",
    },
    network_performance_config: {
      value: containerClusterNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct!.networkPerformanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigList",
    },
    pod_cidr_overprovision_config: {
      value: containerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct!.podCidrOverprovisionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNetworkConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNetworkConfig | undefined) {
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
  private _additionalNodeNetworkConfigs = new ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList(this, "additional_node_network_configs", false);
  public get additionalNodeNetworkConfigs() {
    return this._additionalNodeNetworkConfigs;
  }
  public putAdditionalNodeNetworkConfigs(value: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktn.IResolvable) {
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
  private _additionalPodNetworkConfigs = new ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList(this, "additional_pod_network_configs", false);
  public get additionalPodNetworkConfigs() {
    return this._additionalPodNetworkConfigs;
  }
  public putAdditionalPodNetworkConfigs(value: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktn.IResolvable) {
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
  private _networkPerformanceConfig = new ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig) {
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
  private _podCidrOverprovisionConfig = new ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference(this, "pod_cidr_overprovision_config");
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }
  public putPodCidrOverprovisionConfig(value: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig) {
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
export interface ContainerClusterNodePoolNodeConfigEffectiveTaints {
}

export function containerClusterNodePoolNodeConfigEffectiveTaintsToTerraform(struct?: ContainerClusterNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function containerClusterNodePoolNodeConfigEffectiveTaintsToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigEffectiveTaints | undefined) {
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

export class ContainerClusterNodePoolNodeConfigEffectiveTaintsList extends cdktn.ComplexList {

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
  public get(index: number): ContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference {
    return new ContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures {
  /**
  * Whether the node should have nested virtualization enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_nested_virtualization ContainerCluster#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktn.IResolvable;
  /**
  * Level of Performance Monitoring Unit (PMU) requested. If unset, no access to the PMU is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#performance_monitoring_unit ContainerCluster#performance_monitoring_unit}
  */
  readonly performanceMonitoringUnit?: string;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#threads_per_core ContainerCluster#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function containerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct?: ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_nested_virtualization: cdktn.booleanToTerraform(struct!.enableNestedVirtualization),
    performance_monitoring_unit: cdktn.stringToTerraform(struct!.performanceMonitoringUnit),
    threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
  }
}


export function containerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures): any {
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

export class ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigBootDisk {
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Configured IOPs provisioning. Only valid with disk type hyperdisk-balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#provisioned_iops ContainerCluster#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Configured throughput provisioning. Only valid with disk type hyperdisk-balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#provisioned_throughput ContainerCluster#provisioned_throughput}
  */
  readonly provisionedThroughput?: number;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#size_gb ContainerCluster#size_gb}
  */
  readonly sizeGb?: number;
}

export function containerClusterNodePoolNodeConfigBootDiskToTerraform(struct?: ContainerClusterNodePoolNodeConfigBootDiskOutputReference | ContainerClusterNodePoolNodeConfigBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    provisioned_iops: cdktn.numberToTerraform(struct!.provisionedIops),
    provisioned_throughput: cdktn.numberToTerraform(struct!.provisionedThroughput),
    size_gb: cdktn.numberToTerraform(struct!.sizeGb),
  }
}


export function containerClusterNodePoolNodeConfigBootDiskToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigBootDiskOutputReference | ContainerClusterNodePoolNodeConfigBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigBootDiskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigBootDisk | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigBootDisk | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigConfidentialNodes {
  /**
  * Defines the type of technology used by the confidential node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#confidential_instance_type ContainerCluster#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct?: ContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference | ContainerClusterNodePoolNodeConfigConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidential_instance_type: cdktn.stringToTerraform(struct!.confidentialInstanceType),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference | ContainerClusterNodePoolNodeConfigConfidentialNodes): any {
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

export class ContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigConfidentialNodes | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigConfidentialNodes | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#secret_uri ContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_uri: cdktn.stringToTerraform(struct!.secretUri),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#fqdns ContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_certificate_config ContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fqdns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fqdns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_secret_manager_certificate_config: {
      value: containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable | undefined) {
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
  private _gcpSecretManagerCertificateConfig = new ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#certificate_authority_domain_config ContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktn.listMapper(containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_authority_domain_config: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined) {
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
  private _certificateAuthorityDomainConfig = new ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable) {
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa {
  /**
  * URI for the Secret Manager secret that hosts the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_secret_uri ContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference {
    return new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert {
  /**
  * URI for the Secret Manager secret that hosts the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_secret_uri ContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey {
  /**
  * URI for the Secret Manager secret that hosts the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_secret_uri ContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient {
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#cert ContainerCluster#cert}
  */
  readonly cert: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey;
}

export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert: containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct!.cert),
    key: containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct!.key),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert: {
      value: containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertList",
    },
    key: {
      value: containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable | undefined) {
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
  private _cert = new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientKey) {
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference {
    return new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader {
  /**
  * Configures the header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * Configures the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#value ContainerCluster#value}
  */
  readonly value: string[];
}

export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference {
    return new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts {
  /**
  * Represent the capabilities of the registry host, specifying what operations a host is capable of performing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#capabilities ContainerCluster#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Specifies the maximum duration allowed for a connection attempt to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#dial_timeout ContainerCluster#dial_timeout}
  */
  readonly dialTimeout?: string;
  /**
  * Configures the registry host/mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#host ContainerCluster#host}
  */
  readonly host: string;
  /**
  * Indicate the host's API root endpoint is defined in the URL path rather than by the API specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#override_path ContainerCluster#override_path}
  */
  readonly overridePath?: boolean | cdktn.IResolvable;
  /**
  * ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#ca ContainerCluster#ca}
  */
  readonly ca?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#client ContainerCluster#client}
  */
  readonly client?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#header ContainerCluster#header}
  */
  readonly header?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capabilities),
    dial_timeout: cdktn.stringToTerraform(struct!.dialTimeout),
    host: cdktn.stringToTerraform(struct!.host),
    override_path: cdktn.booleanToTerraform(struct!.overridePath),
    ca: cdktn.listMapper(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform, true)(struct!.ca),
    client: cdktn.listMapper(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform, true)(struct!.client),
    header: cdktn.listMapper(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform, true)(struct!.header),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform, true)(struct!.ca),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList",
    },
    client: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform, true)(struct!.client),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList",
    },
    header: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts | cdktn.IResolvable | undefined) {
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
  private _ca = new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCaList(this, "ca", false);
  public get ca() {
    return this._ca;
  }
  public putCa(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable) {
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
  private _client = new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClientList(this, "client", false);
  public get client() {
    return this._client;
  }
  public putClient(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable) {
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
  private _header = new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable) {
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference {
    return new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts {
  /**
  * Defines the host name of the registry server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#server ContainerCluster#server}
  */
  readonly server: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#hosts ContainerCluster#hosts}
  */
  readonly hosts?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server: cdktn.stringToTerraform(struct!.server),
    hosts: cdktn.listMapper(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsToTerraform, true)(struct!.hosts),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server: {
      value: cdktn.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts | cdktn.IResolvable | undefined) {
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
  private _hosts = new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable) {
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference {
    return new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups {
  /**
  * Whether writable cgroups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#private_registry_access_config ContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig;
  /**
  * registry_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#registry_hosts ContainerCluster#registry_hosts}
  */
  readonly registryHosts?: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable;
  /**
  * writable_cgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#writable_cgroups ContainerCluster#writable_cgroups}
  */
  readonly writableCgroups?: ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups;
}

export function containerClusterNodePoolNodeConfigContainerdConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_registry_access_config: containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
    registry_hosts: cdktn.listMapper(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsToTerraform, true)(struct!.registryHosts),
    writable_cgroups: containerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsToTerraform(struct!.writableCgroups),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_registry_access_config: {
      value: containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigList",
    },
    registry_hosts: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigContainerdConfigRegistryHostsToHclTerraform, true)(struct!.registryHosts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsList",
    },
    writable_cgroups: {
      value: containerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct!.writableCgroups),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfig | undefined) {
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
  private _privateRegistryAccessConfig = new ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig) {
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
  private _registryHosts = new ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHostsList(this, "registry_hosts", false);
  public get registryHosts() {
    return this._registryHosts;
  }
  public putRegistryHosts(value: ContainerClusterNodePoolNodeConfigContainerdConfigRegistryHosts[] | cdktn.IResolvable) {
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
  private _writableCgroups = new ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroupsOutputReference(this, "writable_cgroups");
  public get writableCgroups() {
    return this._writableCgroups;
  }
  public putWritableCgroups(value: ContainerClusterNodePoolNodeConfigContainerdConfigWritableCgroups) {
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
export interface ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig {
  /**
  * Number of local SSDs to be utilized for GKE Data Cache. Uses NVMe interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#data_cache_count ContainerCluster#data_cache_count}
  */
  readonly dataCacheCount?: number;
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function containerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_cache_count: cdktn.numberToTerraform(struct!.dataCacheCount),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
  }
}


export function containerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigFastSocket {
  /**
  * Whether or not NCCL Fast Socket is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigFastSocketToTerraform(struct?: ContainerClusterNodePoolNodeConfigFastSocketOutputReference | ContainerClusterNodePoolNodeConfigFastSocket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigFastSocketOutputReference | ContainerClusterNodePoolNodeConfigFastSocket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigFastSocketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigFastSocket | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | ContainerClusterNodePoolNodeConfigGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | ContainerClusterNodePoolNodeConfigGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGcfsConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /**
  * Mode for how the GPU driver is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gpu_driver_version ContainerCluster#gpu_driver_version}
  */
  readonly gpuDriverVersion: string;
}

export function containerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gpu_driver_version: cdktn.stringToTerraform(struct!.gpuDriverVersion),
  }
}


export function containerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  /**
  * The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gpu_sharing_strategy ContainerCluster#gpu_sharing_strategy}
  */
  readonly gpuSharingStrategy: string;
  /**
  * The maximum number of containers that can share a GPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_shared_clients_per_gpu ContainerCluster#max_shared_clients_per_gpu}
  */
  readonly maxSharedClientsPerGpu: number;
}

export function containerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gpu_sharing_strategy: cdktn.stringToTerraform(struct!.gpuSharingStrategy),
    max_shared_clients_per_gpu: cdktn.numberToTerraform(struct!.maxSharedClientsPerGpu),
  }
}


export function containerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigGuestAccelerator {
  /**
  * The number of the accelerator cards exposed to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#count ContainerCluster#count}
  */
  readonly count: number;
  /**
  * Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gpu_partition_size ContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * The accelerator type resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#type ContainerCluster#type}
  */
  readonly type: string;
  /**
  * gpu_driver_installation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gpu_driver_installation_config ContainerCluster#gpu_driver_installation_config}
  */
  readonly gpuDriverInstallationConfig?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  /**
  * gpu_sharing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gpu_sharing_config ContainerCluster#gpu_sharing_config}
  */
  readonly gpuSharingConfig?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;
}

export function containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    gpu_partition_size: cdktn.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktn.stringToTerraform(struct!.type),
    gpu_driver_installation_config: containerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct!.gpuDriverInstallationConfig),
    gpu_sharing_config: containerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct!.gpuSharingConfig),
  }
}


export function containerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: containerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct!.gpuDriverInstallationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList",
    },
    gpu_sharing_config: {
      value: containerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct!.gpuSharingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktn.IResolvable | undefined) {
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
  private _gpuDriverInstallationConfig = new ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this, "gpu_driver_installation_config");
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }
  public putGpuDriverInstallationConfig(value: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig) {
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
  private _gpuSharingConfig = new ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this, "gpu_sharing_config");
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }
  public putGpuSharingConfig(value: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig) {
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

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference {
    return new ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigGvnicToTerraform(struct?: ContainerClusterNodePoolNodeConfigGvnicOutputReference | ContainerClusterNodePoolNodeConfigGvnic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigGvnicToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGvnicOutputReference | ContainerClusterNodePoolNodeConfigGvnic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigGvnicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGvnic | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigHostMaintenancePolicy {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#maintenance_interval ContainerCluster#maintenance_interval}
  */
  readonly maintenanceInterval: string;
}

export function containerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct?: ContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference | ContainerClusterNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maintenance_interval: cdktn.stringToTerraform(struct!.maintenanceInterval),
  }
}


export function containerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference | ContainerClusterNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigHostMaintenancePolicy | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff {
  /**
  * The maximum duration the backoff delay can accrue to for container restarts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_container_restart_period ContainerCluster#max_container_restart_period}
  */
  readonly maxContainerRestartPeriod?: string;
}

export function containerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffToTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_container_restart_period: cdktn.stringToTerraform(struct!.maxContainerRestartPeriod),
  }
}


export function containerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_container_restart_period: {
      value: cdktn.stringToHclTerraform(struct!.maxContainerRestartPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxContainerRestartPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContainerRestartPeriod = this._maxContainerRestartPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxContainerRestartPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxContainerRestartPeriod = value.maxContainerRestartPeriod;
    }
  }

  // max_container_restart_period - computed: false, optional: true, required: false
  private _maxContainerRestartPeriod?: string; 
  public get maxContainerRestartPeriod() {
    return this.getStringAttribute('max_container_restart_period');
  }
  public set maxContainerRestartPeriod(value: string) {
    this._maxContainerRestartPeriod = value;
  }
  public resetMaxContainerRestartPeriod() {
    this._maxContainerRestartPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContainerRestartPeriodInput() {
    return this._maxContainerRestartPeriod;
  }
}
export interface ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim {
  /**
  * Defines percentage of minimum reclaim for imagefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#imagefs_available ContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for imagefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#imagefs_inodes_free ContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines percentage of minimum reclaim for memory.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#memory_available ContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for nodefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#nodefs_available ContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines percentage of minimum reclaim for nodefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#nodefs_inodes_free ContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines percentage of minimum reclaim for pid.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pid_available ContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function containerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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


export function containerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft {
  /**
  * Defines percentage of soft eviction threshold for imagefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#imagefs_available ContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for imagefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#imagefs_inodes_free ContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines quantity of soft eviction threshold for memory.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#memory_available ContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for nodefs.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#nodefs_available ContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines percentage of soft eviction threshold for nodefs.inodesFree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#nodefs_inodes_free ContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines percentage of soft eviction threshold for pid.available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pid_available ContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function containerClusterNodePoolNodeConfigKubeletConfigEvictionSoftToTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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


export function containerClusterNodePoolNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod {
  /**
  * Defines grace period for the imagefs.available soft eviction threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#imagefs_available ContainerCluster#imagefs_available}
  */
  readonly imagefsAvailable?: string;
  /**
  * Defines grace period for the imagefs.inodesFree soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#imagefs_inodes_free ContainerCluster#imagefs_inodes_free}
  */
  readonly imagefsInodesFree?: string;
  /**
  * Defines grace period for the memory.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#memory_available ContainerCluster#memory_available}
  */
  readonly memoryAvailable?: string;
  /**
  * Defines grace period for the nodefs.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#nodefs_available ContainerCluster#nodefs_available}
  */
  readonly nodefsAvailable?: string;
  /**
  * Defines grace period for the nodefs.inodesFree soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#nodefs_inodes_free ContainerCluster#nodefs_inodes_free}
  */
  readonly nodefsInodesFree?: string;
  /**
  * Defines grace period for the pid.available soft eviction threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pid_available ContainerCluster#pid_available}
  */
  readonly pidAvailable?: string;
}

export function containerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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


export function containerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager {
  /**
  * The Memory Manager policy to use. This policy guides how memory and hugepages are allocated and managed for pods on the node, influencing NUMA affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#policy ContainerCluster#policy}
  */
  readonly policy?: string;
}

export function containerClusterNodePoolNodeConfigKubeletConfigMemoryManagerToTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
  }
}


export function containerClusterNodePoolNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager {
  /**
  * The Topology Manager policy to use. This policy dictates how resource alignment is handled on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#policy ContainerCluster#policy}
  */
  readonly policy?: string;
  /**
  * The Topology Manager scope, defining the granularity at which policy decisions are applied. Valid values are "container" (resources are aligned per container within a pod) or "pod" (resources are aligned for the entire pod).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#scope ContainerCluster#scope}
  */
  readonly scope?: string;
}

export function containerClusterNodePoolNodeConfigKubeletConfigTopologyManagerToTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function containerClusterNodePoolNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigKubeletConfig {
  /**
  * Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns which can be set on the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#allowed_unsafe_sysctls ContainerCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Defines the maximum number of container log files that can be present for a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#container_log_max_files ContainerCluster#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * Defines the maximum size of the container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#container_log_max_size ContainerCluster#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#cpu_cfs_quota ContainerCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktn.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#cpu_cfs_quota_period ContainerCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#cpu_manager_policy ContainerCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Defines the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#eviction_max_pod_grace_period_seconds ContainerCluster#eviction_max_pod_grace_period_seconds}
  */
  readonly evictionMaxPodGracePeriodSeconds?: number;
  /**
  * Defines the percent of disk usage after which image garbage collection is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#image_gc_high_threshold_percent ContainerCluster#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#image_gc_low_threshold_percent ContainerCluster#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * Defines the maximum age an image can be unused before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#image_maximum_gc_age ContainerCluster#image_maximum_gc_age}
  */
  readonly imageMaximumGcAge?: string;
  /**
  * Defines the minimum age for an unused image before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#image_minimum_gc_age ContainerCluster#image_minimum_gc_age}
  */
  readonly imageMinimumGcAge?: string;
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#insecure_kubelet_readonly_port_enabled ContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Set the maximum number of image pulls in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_parallel_image_pulls ContainerCluster#max_parallel_image_pulls}
  */
  readonly maxParallelImagePulls?: number;
  /**
  * Controls the maximum number of processes allowed to run in a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pod_pids_limit ContainerCluster#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
  /**
  * Controls the portion of total grace period (in seconds) that is specifically reserved for terminating critical pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#shutdown_grace_period_critical_pods_seconds ContainerCluster#shutdown_grace_period_critical_pods_seconds}
  */
  readonly shutdownGracePeriodCriticalPodsSeconds?: number;
  /**
  * Controls the total duration of time (in seconds) the node delays shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#shutdown_grace_period_seconds ContainerCluster#shutdown_grace_period_seconds}
  */
  readonly shutdownGracePeriodSeconds?: number;
  /**
  * Defines whether to enable single process OOM killer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#single_process_oom_kill ContainerCluster#single_process_oom_kill}
  */
  readonly singleProcessOomKill?: boolean | cdktn.IResolvable;
  /**
  * crash_loop_back_off block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#crash_loop_back_off ContainerCluster#crash_loop_back_off}
  */
  readonly crashLoopBackOff?: ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff;
  /**
  * eviction_minimum_reclaim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#eviction_minimum_reclaim ContainerCluster#eviction_minimum_reclaim}
  */
  readonly evictionMinimumReclaim?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim;
  /**
  * eviction_soft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#eviction_soft ContainerCluster#eviction_soft}
  */
  readonly evictionSoft?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft;
  /**
  * eviction_soft_grace_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#eviction_soft_grace_period ContainerCluster#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod;
  /**
  * memory_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#memory_manager ContainerCluster#memory_manager}
  */
  readonly memoryManager?: ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager;
  /**
  * topology_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#topology_manager ContainerCluster#topology_manager}
  */
  readonly topologyManager?: ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager;
}

export function containerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    shutdown_grace_period_critical_pods_seconds: cdktn.numberToTerraform(struct!.shutdownGracePeriodCriticalPodsSeconds),
    shutdown_grace_period_seconds: cdktn.numberToTerraform(struct!.shutdownGracePeriodSeconds),
    single_process_oom_kill: cdktn.booleanToTerraform(struct!.singleProcessOomKill),
    crash_loop_back_off: containerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffToTerraform(struct!.crashLoopBackOff),
    eviction_minimum_reclaim: containerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct!.evictionMinimumReclaim),
    eviction_soft: containerClusterNodePoolNodeConfigKubeletConfigEvictionSoftToTerraform(struct!.evictionSoft),
    eviction_soft_grace_period: containerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct!.evictionSoftGracePeriod),
    memory_manager: containerClusterNodePoolNodeConfigKubeletConfigMemoryManagerToTerraform(struct!.memoryManager),
    topology_manager: containerClusterNodePoolNodeConfigKubeletConfigTopologyManagerToTerraform(struct!.topologyManager),
  }
}


export function containerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    shutdown_grace_period_critical_pods_seconds: {
      value: cdktn.numberToHclTerraform(struct!.shutdownGracePeriodCriticalPodsSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown_grace_period_seconds: {
      value: cdktn.numberToHclTerraform(struct!.shutdownGracePeriodSeconds),
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
    crash_loop_back_off: {
      value: containerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffToHclTerraform(struct!.crashLoopBackOff),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffList",
    },
    eviction_minimum_reclaim: {
      value: containerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct!.evictionMinimumReclaim),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimList",
    },
    eviction_soft: {
      value: containerClusterNodePoolNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct!.evictionSoft),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftList",
    },
    eviction_soft_grace_period: {
      value: containerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct!.evictionSoftGracePeriod),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodList",
    },
    memory_manager: {
      value: containerClusterNodePoolNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct!.memoryManager),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerList",
    },
    topology_manager: {
      value: containerClusterNodePoolNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct!.topologyManager),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigKubeletConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigKubeletConfig | undefined {
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
    if (this._shutdownGracePeriodCriticalPodsSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownGracePeriodCriticalPodsSeconds = this._shutdownGracePeriodCriticalPodsSeconds;
    }
    if (this._shutdownGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownGracePeriodSeconds = this._shutdownGracePeriodSeconds;
    }
    if (this._singleProcessOomKill !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleProcessOomKill = this._singleProcessOomKill;
    }
    if (this._crashLoopBackOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crashLoopBackOff = this._crashLoopBackOff?.internalValue;
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigKubeletConfig | undefined) {
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
      this._shutdownGracePeriodCriticalPodsSeconds = undefined;
      this._shutdownGracePeriodSeconds = undefined;
      this._singleProcessOomKill = undefined;
      this._crashLoopBackOff.internalValue = undefined;
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
      this._shutdownGracePeriodCriticalPodsSeconds = value.shutdownGracePeriodCriticalPodsSeconds;
      this._shutdownGracePeriodSeconds = value.shutdownGracePeriodSeconds;
      this._singleProcessOomKill = value.singleProcessOomKill;
      this._crashLoopBackOff.internalValue = value.crashLoopBackOff;
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

  // shutdown_grace_period_critical_pods_seconds - computed: true, optional: true, required: false
  private _shutdownGracePeriodCriticalPodsSeconds?: number; 
  public get shutdownGracePeriodCriticalPodsSeconds() {
    return this.getNumberAttribute('shutdown_grace_period_critical_pods_seconds');
  }
  public set shutdownGracePeriodCriticalPodsSeconds(value: number) {
    this._shutdownGracePeriodCriticalPodsSeconds = value;
  }
  public resetShutdownGracePeriodCriticalPodsSeconds() {
    this._shutdownGracePeriodCriticalPodsSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownGracePeriodCriticalPodsSecondsInput() {
    return this._shutdownGracePeriodCriticalPodsSeconds;
  }

  // shutdown_grace_period_seconds - computed: true, optional: true, required: false
  private _shutdownGracePeriodSeconds?: number; 
  public get shutdownGracePeriodSeconds() {
    return this.getNumberAttribute('shutdown_grace_period_seconds');
  }
  public set shutdownGracePeriodSeconds(value: number) {
    this._shutdownGracePeriodSeconds = value;
  }
  public resetShutdownGracePeriodSeconds() {
    this._shutdownGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownGracePeriodSecondsInput() {
    return this._shutdownGracePeriodSeconds;
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

  // crash_loop_back_off - computed: false, optional: true, required: false
  private _crashLoopBackOff = new ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOffOutputReference(this, "crash_loop_back_off");
  public get crashLoopBackOff() {
    return this._crashLoopBackOff;
  }
  public putCrashLoopBackOff(value: ContainerClusterNodePoolNodeConfigKubeletConfigCrashLoopBackOff) {
    this._crashLoopBackOff.internalValue = value;
  }
  public resetCrashLoopBackOff() {
    this._crashLoopBackOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashLoopBackOffInput() {
    return this._crashLoopBackOff.internalValue;
  }

  // eviction_minimum_reclaim - computed: false, optional: true, required: false
  private _evictionMinimumReclaim = new ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference(this, "eviction_minimum_reclaim");
  public get evictionMinimumReclaim() {
    return this._evictionMinimumReclaim;
  }
  public putEvictionMinimumReclaim(value: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionMinimumReclaim) {
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
  private _evictionSoft = new ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftOutputReference(this, "eviction_soft");
  public get evictionSoft() {
    return this._evictionSoft;
  }
  public putEvictionSoft(value: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoft) {
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
  private _evictionSoftGracePeriod = new ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference(this, "eviction_soft_grace_period");
  public get evictionSoftGracePeriod() {
    return this._evictionSoftGracePeriod;
  }
  public putEvictionSoftGracePeriod(value: ContainerClusterNodePoolNodeConfigKubeletConfigEvictionSoftGracePeriod) {
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
  private _memoryManager = new ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManagerOutputReference(this, "memory_manager");
  public get memoryManager() {
    return this._memoryManager;
  }
  public putMemoryManager(value: ContainerClusterNodePoolNodeConfigKubeletConfigMemoryManager) {
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
  private _topologyManager = new ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManagerOutputReference(this, "topology_manager");
  public get topologyManager() {
    return this._topologyManager;
  }
  public putTopologyManager(value: ContainerClusterNodePoolNodeConfigKubeletConfigTopologyManager) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig {
  /**
  * Whether to enable accurate time synchronization with PTP-KVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_ptp_kvm_time_sync ContainerCluster#enable_ptp_kvm_time_sync}
  */
  readonly enablePtpKvmTimeSync?: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_ptp_kvm_time_sync: cdktn.booleanToTerraform(struct!.enablePtpKvmTimeSync),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePtpKvmTimeSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePtpKvmTimeSync = this._enablePtpKvmTimeSync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript {
  /**
  * The Secret Manager secret URI of the init script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_secret_uri ContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
  /**
  * The GCS generation of the init script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcs_generation ContainerCluster#gcs_generation}
  */
  readonly gcsGeneration?: number;
  /**
  * The GCS URI of the init script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcs_uri ContainerCluster#gcs_uri}
  */
  readonly gcsUri?: string;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
    gcs_generation: cdktn.numberToTerraform(struct!.gcsGeneration),
    gcs_uri: cdktn.stringToTerraform(struct!.gcsUri),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gcp_secret_manager_secret_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcpSecretManagerSecretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_generation: {
      value: cdktn.numberToHclTerraform(struct!.gcsGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gcs_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    if (this._gcsGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsGeneration = this._gcsGeneration;
    }
    if (this._gcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsUri = this._gcsUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpSecretManagerSecretUri = undefined;
      this._gcsGeneration = undefined;
      this._gcsUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpSecretManagerSecretUri = value.gcpSecretManagerSecretUri;
      this._gcsGeneration = value.gcsGeneration;
      this._gcsUri = value.gcsUri;
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

  // gcs_generation - computed: true, optional: true, required: false
  private _gcsGeneration?: number; 
  public get gcsGeneration() {
    return this.getNumberAttribute('gcs_generation');
  }
  public set gcsGeneration(value: number) {
    this._gcsGeneration = value;
  }
  public resetGcsGeneration() {
    this._gcsGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsGenerationInput() {
    return this._gcsGeneration;
  }

  // gcs_uri - computed: false, optional: true, required: false
  private _gcsUri?: string; 
  public get gcsUri() {
    return this.getStringAttribute('gcs_uri');
  }
  public set gcsUri(value: string) {
    this._gcsUri = value;
  }
  public resetGcsUri() {
    this._gcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsUriInput() {
    return this._gcsUri;
  }
}
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit {
  /**
  * init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#init_script ContainerCluster#init_script}
  */
  readonly initScript?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    init_script: containerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptToTerraform(struct!.initScript),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    init_script: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptToHclTerraform(struct!.initScript),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScript = this._initScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initScript.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initScript.internalValue = value.initScript;
    }
  }

  // init_script - computed: false, optional: true, required: false
  private _initScript = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScriptOutputReference(this, "init_script");
  public get initScript() {
    return this._initScript;
  }
  public putInitScript(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitInitScript) {
    this._initScript.internalValue = value;
  }
  public resetInitScript() {
    this._initScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptInput() {
    return this._initScript.internalValue;
  }
}
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig {
  /**
  * Amount of 1G hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#hugepage_size_1g ContainerCluster#hugepage_size_1g}
  */
  readonly hugepageSize1G?: number;
  /**
  * Amount of 2M hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#hugepage_size_2m ContainerCluster#hugepage_size_2m}
  */
  readonly hugepageSize2M?: number;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hugepage_size_1g: cdktn.numberToTerraform(struct!.hugepageSize1G),
    hugepage_size_2m: cdktn.numberToTerraform(struct!.hugepageSize2M),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading {
  /**
  * The policy for kernel module loading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#policy ContainerCluster#policy}
  */
  readonly policy?: string;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile {
  /**
  * Specifies the size of the swap space in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#swap_size_gib ContainerCluster#swap_size_gib}
  */
  readonly swapSizeGib?: number;
  /**
  * Specifies the size of the swap space as a percentage of the boot disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#swap_size_percent ContainerCluster#swap_size_percent}
  */
  readonly swapSizePercent?: number;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    swap_size_gib: cdktn.numberToTerraform(struct!.swapSizeGib),
    swap_size_percent: cdktn.numberToTerraform(struct!.swapSizePercent),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile {
  /**
  * The number of physical local NVMe SSD disks to attach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disk_count ContainerCluster#disk_count}
  */
  readonly diskCount?: number;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_count: cdktn.numberToTerraform(struct!.diskCount),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig {
  /**
  * If true, swap space will not be encrypted. Defaults to false (encrypted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile {
  /**
  * Specifies the size of the swap space in gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#swap_size_gib ContainerCluster#swap_size_gib}
  */
  readonly swapSizeGib?: number;
  /**
  * Specifies the size of the swap space as a percentage of the ephemeral local SSD capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#swap_size_percent ContainerCluster#swap_size_percent}
  */
  readonly swapSizePercent?: number;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    swap_size_gib: cdktn.numberToTerraform(struct!.swapSizeGib),
    swap_size_percent: cdktn.numberToTerraform(struct!.swapSizePercent),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig {
  /**
  * Enables or disables swap for the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * boot_disk_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#boot_disk_profile ContainerCluster#boot_disk_profile}
  */
  readonly bootDiskProfile?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile;
  /**
  * dedicated_local_ssd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#dedicated_local_ssd_profile ContainerCluster#dedicated_local_ssd_profile}
  */
  readonly dedicatedLocalSsdProfile?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#encryption_config ContainerCluster#encryption_config}
  */
  readonly encryptionConfig?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig;
  /**
  * ephemeral_local_ssd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#ephemeral_local_ssd_profile ContainerCluster#ephemeral_local_ssd_profile}
  */
  readonly ephemeralLocalSsdProfile?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    boot_disk_profile: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToTerraform(struct!.bootDiskProfile),
    dedicated_local_ssd_profile: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToTerraform(struct!.dedicatedLocalSsdProfile),
    encryption_config: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    ephemeral_local_ssd_profile: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToTerraform(struct!.ephemeralLocalSsdProfile),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_disk_profile: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileToHclTerraform(struct!.bootDiskProfile),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileList",
    },
    dedicated_local_ssd_profile: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileToHclTerraform(struct!.dedicatedLocalSsdProfile),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileList",
    },
    encryption_config: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigList",
    },
    ephemeral_local_ssd_profile: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileToHclTerraform(struct!.ephemeralLocalSsdProfile),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig | undefined) {
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
  private _bootDiskProfile = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfileOutputReference(this, "boot_disk_profile");
  public get bootDiskProfile() {
    return this._bootDiskProfile;
  }
  public putBootDiskProfile(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigBootDiskProfile) {
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
  private _dedicatedLocalSsdProfile = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfileOutputReference(this, "dedicated_local_ssd_profile");
  public get dedicatedLocalSsdProfile() {
    return this._dedicatedLocalSsdProfile;
  }
  public putDedicatedLocalSsdProfile(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigDedicatedLocalSsdProfile) {
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
  private _encryptionConfig = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEncryptionConfig) {
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
  private _ephemeralLocalSsdProfile = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfileOutputReference(this, "ephemeral_local_ssd_profile");
  public get ephemeralLocalSsdProfile() {
    return this._ephemeralLocalSsdProfile;
  }
  public putEphemeralLocalSsdProfile(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigEphemeralLocalSsdProfile) {
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
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#cgroup_mode ContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#sysctls ContainerCluster#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
  /**
  * The Linux kernel transparent hugepage defrag setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#transparent_hugepage_defrag ContainerCluster#transparent_hugepage_defrag}
  */
  readonly transparentHugepageDefrag?: string;
  /**
  * The Linux kernel transparent hugepage setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#transparent_hugepage_enabled ContainerCluster#transparent_hugepage_enabled}
  */
  readonly transparentHugepageEnabled?: string;
  /**
  * accurate_time_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#accurate_time_config ContainerCluster#accurate_time_config}
  */
  readonly accurateTimeConfig?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig;
  /**
  * custom_node_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#custom_node_init ContainerCluster#custom_node_init}
  */
  readonly customNodeInit?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit;
  /**
  * hugepages_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#hugepages_config ContainerCluster#hugepages_config}
  */
  readonly hugepagesConfig?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig;
  /**
  * node_kernel_module_loading block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_kernel_module_loading ContainerCluster#node_kernel_module_loading}
  */
  readonly nodeKernelModuleLoading?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading;
  /**
  * swap_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#swap_config ContainerCluster#swap_config}
  */
  readonly swapConfig?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cgroup_mode: cdktn.stringToTerraform(struct!.cgroupMode),
    sysctls: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sysctls),
    transparent_hugepage_defrag: cdktn.stringToTerraform(struct!.transparentHugepageDefrag),
    transparent_hugepage_enabled: cdktn.stringToTerraform(struct!.transparentHugepageEnabled),
    accurate_time_config: containerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToTerraform(struct!.accurateTimeConfig),
    custom_node_init: containerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitToTerraform(struct!.customNodeInit),
    hugepages_config: containerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct!.hugepagesConfig),
    node_kernel_module_loading: containerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct!.nodeKernelModuleLoading),
    swap_config: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigToTerraform(struct!.swapConfig),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigToHclTerraform(struct!.accurateTimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigList",
    },
    custom_node_init: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitToHclTerraform(struct!.customNodeInit),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitList",
    },
    hugepages_config: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct!.hugepagesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigList",
    },
    node_kernel_module_loading: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct!.nodeKernelModuleLoading),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingList",
    },
    swap_config: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigToHclTerraform(struct!.swapConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfig | undefined {
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
    if (this._customNodeInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNodeInit = this._customNodeInit?.internalValue;
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._sysctls = undefined;
      this._transparentHugepageDefrag = undefined;
      this._transparentHugepageEnabled = undefined;
      this._accurateTimeConfig.internalValue = undefined;
      this._customNodeInit.internalValue = undefined;
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
      this._customNodeInit.internalValue = value.customNodeInit;
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
  private _accurateTimeConfig = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfigOutputReference(this, "accurate_time_config");
  public get accurateTimeConfig() {
    return this._accurateTimeConfig;
  }
  public putAccurateTimeConfig(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigAccurateTimeConfig) {
    this._accurateTimeConfig.internalValue = value;
  }
  public resetAccurateTimeConfig() {
    this._accurateTimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accurateTimeConfigInput() {
    return this._accurateTimeConfig.internalValue;
  }

  // custom_node_init - computed: false, optional: true, required: false
  private _customNodeInit = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInitOutputReference(this, "custom_node_init");
  public get customNodeInit() {
    return this._customNodeInit;
  }
  public putCustomNodeInit(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigCustomNodeInit) {
    this._customNodeInit.internalValue = value;
  }
  public resetCustomNodeInit() {
    this._customNodeInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNodeInitInput() {
    return this._customNodeInit.internalValue;
  }

  // hugepages_config - computed: false, optional: true, required: false
  private _hugepagesConfig = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference(this, "hugepages_config");
  public get hugepagesConfig() {
    return this._hugepagesConfig;
  }
  public putHugepagesConfig(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig) {
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
  private _nodeKernelModuleLoading = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference(this, "node_kernel_module_loading");
  public get nodeKernelModuleLoading() {
    return this._nodeKernelModuleLoading;
  }
  public putNodeKernelModuleLoading(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigNodeKernelModuleLoading) {
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
  private _swapConfig = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfigOutputReference(this, "swap_config");
  public get swapConfig() {
    return this._swapConfig;
  }
  public putSwapConfig(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigSwapConfig) {
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
export interface ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig {
  /**
  * Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function containerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
  }
}


export function containerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigNodeImageConfig {
  /**
  * The Operating System image for the node pool. This is a private feature, please contact your Google account team for allowlisting this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#image ContainerCluster#image}
  */
  readonly image?: string;
  /**
  * The GCP project storing the Operating System image for the node pool. This is a private feature, please contact your Google account team for allowlisting this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#image_project ContainerCluster#image_project}
  */
  readonly imageProject?: string;
}

export function containerClusterNodePoolNodeConfigNodeImageConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigNodeImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image: cdktn.stringToTerraform(struct!.image),
    image_project: cdktn.stringToTerraform(struct!.imageProject),
  }
}


export function containerClusterNodePoolNodeConfigNodeImageConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigNodeImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_project: {
      value: cdktn.stringToHclTerraform(struct!.imageProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigNodeImageConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigNodeImageConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageProject = this._imageProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigNodeImageConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._imageProject = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._imageProject = value.imageProject;
    }
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_project - computed: true, optional: true, required: false
  private _imageProject?: string; 
  public get imageProject() {
    return this.getStringAttribute('image_project');
  }
  public set imageProject(value: string) {
    this._imageProject = value;
  }
  public resetImageProject() {
    this._imageProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageProjectInput() {
    return this._imageProject;
  }
}

export class ContainerClusterNodePoolNodeConfigNodeImageConfigList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigNodeImageConfig[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigNodeImageConfigOutputReference {
    return new ContainerClusterNodePoolNodeConfigNodeImageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#consume_reservation_type ContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#values ContainerCluster#values}
  */
  readonly values?: string[];
}

export function containerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct?: ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | ContainerClusterNodePoolNodeConfigReservationAffinity): any {
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


export function containerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | ContainerClusterNodePoolNodeConfigReservationAffinity): any {
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

export class ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigReservationAffinity | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigReservationAffinity | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigSandboxConfig {
  /**
  * Type of the sandbox to use for the node (e.g. 'GVISOR').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#type ContainerCluster#type}
  */
  readonly type: string;
}

export function containerClusterNodePoolNodeConfigSandboxConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigSandboxConfigOutputReference | ContainerClusterNodePoolNodeConfigSandboxConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function containerClusterNodePoolNodeConfigSandboxConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigSandboxConfigOutputReference | ContainerClusterNodePoolNodeConfigSandboxConfig): any {
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

export class ContainerClusterNodePoolNodeConfigSandboxConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigSandboxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigSandboxConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigSecondaryBootDisks {
  /**
  * Disk image to create the secondary boot disk from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disk_image ContainerCluster#disk_image}
  */
  readonly diskImage: string;
  /**
  * Mode for how the secondary boot disk is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode?: string;
}

export function containerClusterNodePoolNodeConfigSecondaryBootDisksToTerraform(struct?: ContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk_image: cdktn.stringToTerraform(struct!.diskImage),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function containerClusterNodePoolNodeConfigSecondaryBootDisksToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolNodeConfigSecondaryBootDisksList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference {
    return new ContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_integrity_monitoring ContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktn.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_secure_boot ContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_integrity_monitoring: cdktn.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktn.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function containerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#operator ContainerCluster#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#values ContainerCluster#values}
  */
  readonly values: string[];
}

export function containerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable): any {
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


export function containerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable): any {
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

export class ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigSoleTenantConfig {
  /**
  * Specifies the minimum number of vCPUs that each sole tenant node must have to use CPU overcommit. If not specified, the CPU overcommit feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#min_node_cpus ContainerCluster#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_affinity ContainerCluster#node_affinity}
  */
  readonly nodeAffinity: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference | ContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    min_node_cpus: cdktn.numberToTerraform(struct!.minNodeCpus),
    node_affinity: cdktn.listMapper(containerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function containerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference | ContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    min_node_cpus: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined) {
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
  private _nodeAffinity = new ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktn.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface ContainerClusterNodePoolNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#effect ContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#value ContainerCluster#value}
  */
  readonly value: string;
}

export function containerClusterNodePoolNodeConfigTaintToTerraform(struct?: ContainerClusterNodePoolNodeConfigTaint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    effect: cdktn.stringToTerraform(struct!.effect),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function containerClusterNodePoolNodeConfigTaintToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigTaint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigTaintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigTaint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigTaint | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolNodeConfigTaintList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigTaint[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigTaintOutputReference {
    return new ContainerClusterNodePoolNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigTaintConfig {
  /**
  * Architecture taint behavior. Controls, how we apply taints based on the node architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#architecture_taint_behavior ContainerCluster#architecture_taint_behavior}
  */
  readonly architectureTaintBehavior: string;
}

export function containerClusterNodePoolNodeConfigTaintConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigTaintConfigOutputReference | ContainerClusterNodePoolNodeConfigTaintConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    architecture_taint_behavior: cdktn.stringToTerraform(struct!.architectureTaintBehavior),
  }
}


export function containerClusterNodePoolNodeConfigTaintConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigTaintConfigOutputReference | ContainerClusterNodePoolNodeConfigTaintConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    architecture_taint_behavior: {
      value: cdktn.stringToHclTerraform(struct!.architectureTaintBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigTaintConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigTaintConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectureTaintBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectureTaintBehavior = this._architectureTaintBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigTaintConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architectureTaintBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architectureTaintBehavior = value.architectureTaintBehavior;
    }
  }

  // architecture_taint_behavior - computed: false, optional: false, required: true
  private _architectureTaintBehavior?: string; 
  public get architectureTaintBehavior() {
    return this.getStringAttribute('architecture_taint_behavior');
  }
  public set architectureTaintBehavior(value: string) {
    this._architectureTaintBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureTaintBehaviorInput() {
    return this._architectureTaintBehavior;
  }
}
export interface ContainerClusterNodePoolNodeConfigWindowsNodeConfig {
  /**
  * The OS Version of the windows nodepool.Values are OS_VERSION_UNSPECIFIED,OS_VERSION_LTSC2019 and OS_VERSION_LTSC2022
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#osversion ContainerCluster#osversion}
  */
  readonly osversion?: string;
}

export function containerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference | ContainerClusterNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    osversion: cdktn.stringToTerraform(struct!.osversion),
  }
}


export function containerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference | ContainerClusterNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osversion = this._osversion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigWindowsNodeConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode: string;
}

export function containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function containerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
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

export class ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#boot_disk_kms_key ContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disk_size_gb ContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_confidential_storage ContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktn.IResolvable;
  /**
  * Enables Flex Start provisioning model for the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#flex_start ContainerCluster#flex_start}
  */
  readonly flexStart?: boolean | cdktn.IResolvable;
  /**
  * The type of GPUDirect strategy to enable on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gpudirect_strategy ContainerCluster#gpudirect_strategy}
  */
  readonly gpudirectStrategy?: string;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#labels ContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#local_ssd_encryption_mode ContainerCluster#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#logging_variant ContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#machine_type ContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_run_duration ContainerCluster#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#metadata ContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_group ContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#preemptible ContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktn.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#resource_labels ContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#resource_manager_tags ContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#spot ContainerCluster#spot}
  */
  readonly spot?: boolean | cdktn.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#storage_pools ContainerCluster#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#advanced_machine_features ContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#boot_disk ContainerCluster#boot_disk}
  */
  readonly bootDisk?: ContainerClusterNodePoolNodeConfigBootDisk;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#confidential_nodes ContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: ContainerClusterNodePoolNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#containerd_config ContainerCluster#containerd_config}
  */
  readonly containerdConfig?: ContainerClusterNodePoolNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#ephemeral_storage_local_ssd_config ContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#fast_socket ContainerCluster#fast_socket}
  */
  readonly fastSocket?: ContainerClusterNodePoolNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcfs_config ContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: ContainerClusterNodePoolNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#guest_accelerator ContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktn.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gvnic ContainerCluster#gvnic}
  */
  readonly gvnic?: ContainerClusterNodePoolNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#host_maintenance_policy ContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: ContainerClusterNodePoolNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#kubelet_config ContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: ContainerClusterNodePoolNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#linux_node_config ContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: ContainerClusterNodePoolNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#local_nvme_ssd_block_config ContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * node_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_image_config ContainerCluster#node_image_config}
  */
  readonly nodeImageConfig?: ContainerClusterNodePoolNodeConfigNodeImageConfig[] | cdktn.IResolvable;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#reservation_affinity ContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: ContainerClusterNodePoolNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#sandbox_config ContainerCluster#sandbox_config}
  */
  readonly sandboxConfig?: ContainerClusterNodePoolNodeConfigSandboxConfig;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#secondary_boot_disks ContainerCluster#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: ContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktn.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#sole_tenant_config ContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: ContainerClusterNodePoolNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#taint ContainerCluster#taint}
  */
  readonly taint?: ContainerClusterNodePoolNodeConfigTaint[] | cdktn.IResolvable;
  /**
  * taint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#taint_config ContainerCluster#taint_config}
  */
  readonly taintConfig?: ContainerClusterNodePoolNodeConfigTaintConfig;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#windows_node_config ContainerCluster#windows_node_config}
  */
  readonly windowsNodeConfig?: ContainerClusterNodePoolNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#workload_metadata_config ContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig;
}

export function containerClusterNodePoolNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigOutputReference | ContainerClusterNodePoolNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boot_disk_kms_key: cdktn.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktn.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktn.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktn.booleanToTerraform(struct!.enableConfidentialStorage),
    flex_start: cdktn.booleanToTerraform(struct!.flexStart),
    gpudirect_strategy: cdktn.stringToTerraform(struct!.gpudirectStrategy),
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
    advanced_machine_features: containerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    boot_disk: containerClusterNodePoolNodeConfigBootDiskToTerraform(struct!.bootDisk),
    confidential_nodes: containerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: containerClusterNodePoolNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_local_ssd_config: containerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: containerClusterNodePoolNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: containerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktn.listMapper(containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: containerClusterNodePoolNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: containerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: containerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: containerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: containerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    node_image_config: cdktn.listMapper(containerClusterNodePoolNodeConfigNodeImageConfigToTerraform, true)(struct!.nodeImageConfig),
    reservation_affinity: containerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: containerClusterNodePoolNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    secondary_boot_disks: cdktn.listMapper(containerClusterNodePoolNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: containerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktn.listMapper(containerClusterNodePoolNodeConfigTaintToTerraform, true)(struct!.taint),
    taint_config: containerClusterNodePoolNodeConfigTaintConfigToTerraform(struct!.taintConfig),
    windows_node_config: containerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function containerClusterNodePoolNodeConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigOutputReference | ContainerClusterNodePoolNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    gpudirect_strategy: {
      value: cdktn.stringToHclTerraform(struct!.gpudirectStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: containerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesList",
    },
    boot_disk: {
      value: containerClusterNodePoolNodeConfigBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigBootDiskList",
    },
    confidential_nodes: {
      value: containerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: containerClusterNodePoolNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: containerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: containerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: containerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: containerClusterNodePoolNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: containerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: containerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: containerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigList",
    },
    node_image_config: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigNodeImageConfigToHclTerraform, true)(struct!.nodeImageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigNodeImageConfigList",
    },
    reservation_affinity: {
      value: containerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: containerClusterNodePoolNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigSandboxConfigList",
    },
    secondary_boot_disks: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: containerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: containerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigTaintList",
    },
    taint_config: {
      value: containerClusterNodePoolNodeConfigTaintConfigToHclTerraform(struct!.taintConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigTaintConfigList",
    },
    windows_node_config: {
      value: containerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: containerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfig | undefined {
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
    if (this._gpudirectStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpudirectStrategy = this._gpudirectStrategy;
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
    if (this._nodeImageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeImageConfig = this._nodeImageConfig?.internalValue;
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
    if (this._taintConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taintConfig = this._taintConfig?.internalValue;
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._flexStart = undefined;
      this._gpudirectStrategy = undefined;
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
      this._nodeImageConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._taintConfig.internalValue = undefined;
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
      this._gpudirectStrategy = value.gpudirectStrategy;
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
      this._nodeImageConfig.internalValue = value.nodeImageConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._taintConfig.internalValue = value.taintConfig;
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
  private _effectiveTaints = new ContainerClusterNodePoolNodeConfigEffectiveTaintsList(this, "effective_taints", false);
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

  // gpudirect_strategy - computed: true, optional: true, required: false
  private _gpudirectStrategy?: string; 
  public get gpudirectStrategy() {
    return this.getStringAttribute('gpudirect_strategy');
  }
  public set gpudirectStrategy(value: string) {
    this._gpudirectStrategy = value;
  }
  public resetGpudirectStrategy() {
    this._gpudirectStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpudirectStrategyInput() {
    return this._gpudirectStrategy;
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
  private _advancedMachineFeatures = new ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures) {
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
  private _bootDisk = new ContainerClusterNodePoolNodeConfigBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: ContainerClusterNodePoolNodeConfigBootDisk) {
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
  private _confidentialNodes = new ContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: ContainerClusterNodePoolNodeConfigConfidentialNodes) {
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
  private _containerdConfig = new ContainerClusterNodePoolNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: ContainerClusterNodePoolNodeConfigContainerdConfig) {
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
  private _ephemeralStorageLocalSsdConfig = new ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig) {
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
  private _fastSocket = new ContainerClusterNodePoolNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: ContainerClusterNodePoolNodeConfigFastSocket) {
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
  private _gcfsConfig = new ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerClusterNodePoolNodeConfigGcfsConfig) {
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
  private _guestAccelerator = new ContainerClusterNodePoolNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktn.IResolvable) {
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
  private _gvnic = new ContainerClusterNodePoolNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: ContainerClusterNodePoolNodeConfigGvnic) {
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
  private _hostMaintenancePolicy = new ContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: ContainerClusterNodePoolNodeConfigHostMaintenancePolicy) {
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
  private _kubeletConfig = new ContainerClusterNodePoolNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: ContainerClusterNodePoolNodeConfigKubeletConfig) {
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
  private _linuxNodeConfig = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfig) {
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
  private _localNvmeSsdBlockConfig = new ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // node_image_config - computed: false, optional: true, required: false
  private _nodeImageConfig = new ContainerClusterNodePoolNodeConfigNodeImageConfigList(this, "node_image_config", false);
  public get nodeImageConfig() {
    return this._nodeImageConfig;
  }
  public putNodeImageConfig(value: ContainerClusterNodePoolNodeConfigNodeImageConfig[] | cdktn.IResolvable) {
    this._nodeImageConfig.internalValue = value;
  }
  public resetNodeImageConfig() {
    this._nodeImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageConfigInput() {
    return this._nodeImageConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ContainerClusterNodePoolNodeConfigReservationAffinity) {
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
  private _sandboxConfig = new ContainerClusterNodePoolNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: ContainerClusterNodePoolNodeConfigSandboxConfig) {
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
  private _secondaryBootDisks = new ContainerClusterNodePoolNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: ContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktn.IResolvable) {
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
  private _shieldedInstanceConfig = new ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig) {
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
  private _soleTenantConfig = new ContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: ContainerClusterNodePoolNodeConfigSoleTenantConfig) {
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
  private _taint = new ContainerClusterNodePoolNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: ContainerClusterNodePoolNodeConfigTaint[] | cdktn.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // taint_config - computed: false, optional: true, required: false
  private _taintConfig = new ContainerClusterNodePoolNodeConfigTaintConfigOutputReference(this, "taint_config");
  public get taintConfig() {
    return this._taintConfig;
  }
  public putTaintConfig(value: ContainerClusterNodePoolNodeConfigTaintConfig) {
    this._taintConfig.internalValue = value;
  }
  public resetTaintConfig() {
    this._taintConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintConfigInput() {
    return this._taintConfig.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new ContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: ContainerClusterNodePoolNodeConfigWindowsNodeConfig) {
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
  private _workloadMetadataConfig = new ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig) {
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
export interface ContainerClusterNodePoolNodeDrainConfig {
  /**
  * The duration of the grace termination period for node drain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#grace_termination_duration ContainerCluster#grace_termination_duration}
  */
  readonly graceTerminationDuration?: string;
  /**
  * The duration of the PDB timeout period for node drain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pdb_timeout_duration ContainerCluster#pdb_timeout_duration}
  */
  readonly pdbTimeoutDuration?: string;
  /**
  * Whether to respect PodDisruptionBudget policy during node pool deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#respect_pdb_during_node_pool_deletion ContainerCluster#respect_pdb_during_node_pool_deletion}
  */
  readonly respectPdbDuringNodePoolDeletion?: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolNodeDrainConfigToTerraform(struct?: ContainerClusterNodePoolNodeDrainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grace_termination_duration: cdktn.stringToTerraform(struct!.graceTerminationDuration),
    pdb_timeout_duration: cdktn.stringToTerraform(struct!.pdbTimeoutDuration),
    respect_pdb_during_node_pool_deletion: cdktn.booleanToTerraform(struct!.respectPdbDuringNodePoolDeletion),
  }
}


export function containerClusterNodePoolNodeDrainConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeDrainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grace_termination_duration: {
      value: cdktn.stringToHclTerraform(struct!.graceTerminationDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb_timeout_duration: {
      value: cdktn.stringToHclTerraform(struct!.pdbTimeoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ContainerClusterNodePoolNodeDrainConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeDrainConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graceTerminationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceTerminationDuration = this._graceTerminationDuration;
    }
    if (this._pdbTimeoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbTimeoutDuration = this._pdbTimeoutDuration;
    }
    if (this._respectPdbDuringNodePoolDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.respectPdbDuringNodePoolDeletion = this._respectPdbDuringNodePoolDeletion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeDrainConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graceTerminationDuration = undefined;
      this._pdbTimeoutDuration = undefined;
      this._respectPdbDuringNodePoolDeletion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graceTerminationDuration = value.graceTerminationDuration;
      this._pdbTimeoutDuration = value.pdbTimeoutDuration;
      this._respectPdbDuringNodePoolDeletion = value.respectPdbDuringNodePoolDeletion;
    }
  }

  // grace_termination_duration - computed: false, optional: true, required: false
  private _graceTerminationDuration?: string; 
  public get graceTerminationDuration() {
    return this.getStringAttribute('grace_termination_duration');
  }
  public set graceTerminationDuration(value: string) {
    this._graceTerminationDuration = value;
  }
  public resetGraceTerminationDuration() {
    this._graceTerminationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceTerminationDurationInput() {
    return this._graceTerminationDuration;
  }

  // pdb_timeout_duration - computed: false, optional: true, required: false
  private _pdbTimeoutDuration?: string; 
  public get pdbTimeoutDuration() {
    return this.getStringAttribute('pdb_timeout_duration');
  }
  public set pdbTimeoutDuration(value: string) {
    this._pdbTimeoutDuration = value;
  }
  public resetPdbTimeoutDuration() {
    this._pdbTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbTimeoutDurationInput() {
    return this._pdbTimeoutDuration;
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

export class ContainerClusterNodePoolNodeDrainConfigList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeDrainConfig[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeDrainConfigOutputReference {
    return new ContainerClusterNodePoolNodeDrainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolPlacementPolicy {
  /**
  * If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#policy_name ContainerCluster#policy_name}
  */
  readonly policyName?: string;
  /**
  * The TPU topology like "2x4" or "2x2x2". https://cloud.google.com/kubernetes-engine/docs/concepts/plan-tpus#topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#tpu_topology ContainerCluster#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * Type defines the type of placement policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#type ContainerCluster#type}
  */
  readonly type: string;
}

export function containerClusterNodePoolPlacementPolicyToTerraform(struct?: ContainerClusterNodePoolPlacementPolicyOutputReference | ContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_name: cdktn.stringToTerraform(struct!.policyName),
    tpu_topology: cdktn.stringToTerraform(struct!.tpuTopology),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function containerClusterNodePoolPlacementPolicyToHclTerraform(struct?: ContainerClusterNodePoolPlacementPolicyOutputReference | ContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolPlacementPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolPlacementPolicy | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolPlacementPolicy | undefined) {
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
export interface ContainerClusterNodePoolQueuedProvisioning {
  /**
  * Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolQueuedProvisioningToTerraform(struct?: ContainerClusterNodePoolQueuedProvisioningOutputReference | ContainerClusterNodePoolQueuedProvisioning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolQueuedProvisioningToHclTerraform(struct?: ContainerClusterNodePoolQueuedProvisioningOutputReference | ContainerClusterNodePoolQueuedProvisioning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolQueuedProvisioningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolQueuedProvisioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolQueuedProvisioning | undefined) {
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
export interface ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#batch_node_count ContainerCluster#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Percentage of the blue pool nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#batch_percentage ContainerCluster#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Soak time after each batch gets drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#batch_soak_duration ContainerCluster#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
}

export function containerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_node_count: cdktn.numberToTerraform(struct!.batchNodeCount),
    batch_percentage: cdktn.numberToTerraform(struct!.batchPercentage),
    batch_soak_duration: cdktn.stringToTerraform(struct!.batchSoakDuration),
  }
}


export function containerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
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
export interface ContainerClusterNodePoolUpgradeSettingsBlueGreenSettings {
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_pool_soak_duration ContainerCluster#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
  /**
  * standard_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#standard_rollout_policy ContainerCluster#standard_rollout_policy}
  */
  readonly standardRolloutPolicy: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function containerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct?: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | ContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_pool_soak_duration: cdktn.stringToTerraform(struct!.nodePoolSoakDuration),
    standard_rollout_policy: containerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct!.standardRolloutPolicy),
  }
}


export function containerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | ContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_pool_soak_duration: {
      value: cdktn.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_rollout_policy: {
      value: containerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct!.standardRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined) {
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
  private _standardRolloutPolicy = new ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this, "standard_rollout_policy");
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
  public putStandardRolloutPolicy(value: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy) {
    this._standardRolloutPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardRolloutPolicyInput() {
    return this._standardRolloutPolicy.internalValue;
  }
}
export interface ContainerClusterNodePoolUpgradeSettings {
  /**
  * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_surge ContainerCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_unavailable ContainerCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Update strategy for the given nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#strategy ContainerCluster#strategy}
  */
  readonly strategy?: string;
  /**
  * blue_green_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#blue_green_settings ContainerCluster#blue_green_settings}
  */
  readonly blueGreenSettings?: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettings;
}

export function containerClusterNodePoolUpgradeSettingsToTerraform(struct?: ContainerClusterNodePoolUpgradeSettingsOutputReference | ContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_surge: cdktn.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktn.numberToTerraform(struct!.maxUnavailable),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    blue_green_settings: containerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct!.blueGreenSettings),
  }
}


export function containerClusterNodePoolUpgradeSettingsToHclTerraform(struct?: ContainerClusterNodePoolUpgradeSettingsOutputReference | ContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: containerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct!.blueGreenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolUpgradeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolUpgradeSettings | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolUpgradeSettings | undefined) {
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
  private _blueGreenSettings = new ContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(this, "blue_green_settings");
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }
  public putBlueGreenSettings(value: ContainerClusterNodePoolUpgradeSettingsBlueGreenSettings) {
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
export interface ContainerClusterNodePool {
  /**
  * When true, the provider ignores external changes (drift) to the node count by skipping GCE API queries to the Instance Group Managers. This is a performance optimization for large clusters that saves API quota. Setting this to true will result in missing managed_instance_group_urls in the state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#ignore_node_count_changes ContainerCluster#ignore_node_count_changes}
  */
  readonly ignoreNodeCountChanges?: boolean | cdktn.IResolvable;
  /**
  * The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#initial_node_count ContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#max_pods_per_node ContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#name ContainerCluster#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#name_prefix ContainerCluster#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_count ContainerCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_locations ContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#version ContainerCluster#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#autoscaling ContainerCluster#autoscaling}
  */
  readonly autoscaling?: ContainerClusterNodePoolAutoscaling;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#maintenance_policy ContainerCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: ContainerClusterNodePoolMaintenancePolicy[] | cdktn.IResolvable;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#management ContainerCluster#management}
  */
  readonly management?: ContainerClusterNodePoolManagement;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#network_config ContainerCluster#network_config}
  */
  readonly networkConfig?: ContainerClusterNodePoolNetworkConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_config ContainerCluster#node_config}
  */
  readonly nodeConfig?: ContainerClusterNodePoolNodeConfig;
  /**
  * node_drain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_drain_config ContainerCluster#node_drain_config}
  */
  readonly nodeDrainConfig?: ContainerClusterNodePoolNodeDrainConfig[] | cdktn.IResolvable;
  /**
  * placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#placement_policy ContainerCluster#placement_policy}
  */
  readonly placementPolicy?: ContainerClusterNodePoolPlacementPolicy;
  /**
  * queued_provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#queued_provisioning ContainerCluster#queued_provisioning}
  */
  readonly queuedProvisioning?: ContainerClusterNodePoolQueuedProvisioning;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#upgrade_settings ContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: ContainerClusterNodePoolUpgradeSettings;
}

export function containerClusterNodePoolToTerraform(struct?: ContainerClusterNodePool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ignore_node_count_changes: cdktn.booleanToTerraform(struct!.ignoreNodeCountChanges),
    initial_node_count: cdktn.numberToTerraform(struct!.initialNodeCount),
    max_pods_per_node: cdktn.numberToTerraform(struct!.maxPodsPerNode),
    name: cdktn.stringToTerraform(struct!.name),
    name_prefix: cdktn.stringToTerraform(struct!.namePrefix),
    node_count: cdktn.numberToTerraform(struct!.nodeCount),
    node_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nodeLocations),
    version: cdktn.stringToTerraform(struct!.version),
    autoscaling: containerClusterNodePoolAutoscalingToTerraform(struct!.autoscaling),
    maintenance_policy: cdktn.listMapper(containerClusterNodePoolMaintenancePolicyToTerraform, true)(struct!.maintenancePolicy),
    management: containerClusterNodePoolManagementToTerraform(struct!.management),
    network_config: containerClusterNodePoolNetworkConfigToTerraform(struct!.networkConfig),
    node_config: containerClusterNodePoolNodeConfigToTerraform(struct!.nodeConfig),
    node_drain_config: cdktn.listMapper(containerClusterNodePoolNodeDrainConfigToTerraform, true)(struct!.nodeDrainConfig),
    placement_policy: containerClusterNodePoolPlacementPolicyToTerraform(struct!.placementPolicy),
    queued_provisioning: containerClusterNodePoolQueuedProvisioningToTerraform(struct!.queuedProvisioning),
    upgrade_settings: containerClusterNodePoolUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function containerClusterNodePoolToHclTerraform(struct?: ContainerClusterNodePool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ignore_node_count_changes: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreNodeCountChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_node_count: {
      value: cdktn.numberToHclTerraform(struct!.initialNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods_per_node: {
      value: cdktn.numberToHclTerraform(struct!.maxPodsPerNode),
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
    name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktn.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nodeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling: {
      value: containerClusterNodePoolAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolAutoscalingList",
    },
    maintenance_policy: {
      value: cdktn.listMapperHcl(containerClusterNodePoolMaintenancePolicyToHclTerraform, true)(struct!.maintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolMaintenancePolicyList",
    },
    management: {
      value: containerClusterNodePoolManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolManagementList",
    },
    network_config: {
      value: containerClusterNodePoolNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigList",
    },
    node_config: {
      value: containerClusterNodePoolNodeConfigToHclTerraform(struct!.nodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigList",
    },
    node_drain_config: {
      value: cdktn.listMapperHcl(containerClusterNodePoolNodeDrainConfigToHclTerraform, true)(struct!.nodeDrainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeDrainConfigList",
    },
    placement_policy: {
      value: containerClusterNodePoolPlacementPolicyToHclTerraform(struct!.placementPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolPlacementPolicyList",
    },
    queued_provisioning: {
      value: containerClusterNodePoolQueuedProvisioningToHclTerraform(struct!.queuedProvisioning),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolQueuedProvisioningList",
    },
    upgrade_settings: {
      value: containerClusterNodePoolUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreNodeCountChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNodeCountChanges = this._ignoreNodeCountChanges;
    }
    if (this._initialNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialNodeCount = this._initialNodeCount;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLocations = this._nodeLocations;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._maintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenancePolicy = this._maintenancePolicy?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._nodeDrainConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainConfig = this._nodeDrainConfig?.internalValue;
    }
    if (this._placementPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementPolicy = this._placementPolicy?.internalValue;
    }
    if (this._queuedProvisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuedProvisioning = this._queuedProvisioning?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreNodeCountChanges = undefined;
      this._initialNodeCount = undefined;
      this._maxPodsPerNode = undefined;
      this._name = undefined;
      this._namePrefix = undefined;
      this._nodeCount = undefined;
      this._nodeLocations = undefined;
      this._version = undefined;
      this._autoscaling.internalValue = undefined;
      this._maintenancePolicy.internalValue = undefined;
      this._management.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._nodeConfig.internalValue = undefined;
      this._nodeDrainConfig.internalValue = undefined;
      this._placementPolicy.internalValue = undefined;
      this._queuedProvisioning.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreNodeCountChanges = value.ignoreNodeCountChanges;
      this._initialNodeCount = value.initialNodeCount;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._name = value.name;
      this._namePrefix = value.namePrefix;
      this._nodeCount = value.nodeCount;
      this._nodeLocations = value.nodeLocations;
      this._version = value.version;
      this._autoscaling.internalValue = value.autoscaling;
      this._maintenancePolicy.internalValue = value.maintenancePolicy;
      this._management.internalValue = value.management;
      this._networkConfig.internalValue = value.networkConfig;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._nodeDrainConfig.internalValue = value.nodeDrainConfig;
      this._placementPolicy.internalValue = value.placementPolicy;
      this._queuedProvisioning.internalValue = value.queuedProvisioning;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // ignore_node_count_changes - computed: false, optional: true, required: false
  private _ignoreNodeCountChanges?: boolean | cdktn.IResolvable; 
  public get ignoreNodeCountChanges() {
    return this.getBooleanAttribute('ignore_node_count_changes');
  }
  public set ignoreNodeCountChanges(value: boolean | cdktn.IResolvable) {
    this._ignoreNodeCountChanges = value;
  }
  public resetIgnoreNodeCountChanges() {
    this._ignoreNodeCountChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNodeCountChangesInput() {
    return this._ignoreNodeCountChanges;
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
  private _autoscaling = new ContainerClusterNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: ContainerClusterNodePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new ContainerClusterNodePoolMaintenancePolicyList(this, "maintenance_policy", false);
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: ContainerClusterNodePoolMaintenancePolicy[] | cdktn.IResolvable) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new ContainerClusterNodePoolManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: ContainerClusterNodePoolManagement) {
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
  private _networkConfig = new ContainerClusterNodePoolNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: ContainerClusterNodePoolNetworkConfig) {
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
  private _nodeConfig = new ContainerClusterNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: ContainerClusterNodePoolNodeConfig) {
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
  private _nodeDrainConfig = new ContainerClusterNodePoolNodeDrainConfigList(this, "node_drain_config", false);
  public get nodeDrainConfig() {
    return this._nodeDrainConfig;
  }
  public putNodeDrainConfig(value: ContainerClusterNodePoolNodeDrainConfig[] | cdktn.IResolvable) {
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
  private _placementPolicy = new ContainerClusterNodePoolPlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: ContainerClusterNodePoolPlacementPolicy) {
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
  private _queuedProvisioning = new ContainerClusterNodePoolQueuedProvisioningOutputReference(this, "queued_provisioning");
  public get queuedProvisioning() {
    return this._queuedProvisioning;
  }
  public putQueuedProvisioning(value: ContainerClusterNodePoolQueuedProvisioning) {
    this._queuedProvisioning.internalValue = value;
  }
  public resetQueuedProvisioning() {
    this._queuedProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedProvisioningInput() {
    return this._queuedProvisioning.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new ContainerClusterNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: ContainerClusterNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}

export class ContainerClusterNodePoolList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePool[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolOutputReference {
    return new ContainerClusterNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading {
  /**
  * The policy for kernel module loading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#policy ContainerCluster#policy}
  */
  readonly policy?: string;
}

export function containerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct?: ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy: cdktn.stringToTerraform(struct!.policy),
  }
}


export function containerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct?: ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference | ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading | undefined) {
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
export interface ContainerClusterNodePoolAutoConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#cgroup_mode ContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * node_kernel_module_loading block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_kernel_module_loading ContainerCluster#node_kernel_module_loading}
  */
  readonly nodeKernelModuleLoading?: ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading;
}

export function containerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform(struct?: ContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference | ContainerClusterNodePoolAutoConfigLinuxNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cgroup_mode: cdktn.stringToTerraform(struct!.cgroupMode),
    node_kernel_module_loading: containerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToTerraform(struct!.nodeKernelModuleLoading),
  }
}


export function containerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform(struct?: ContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference | ContainerClusterNodePoolAutoConfigLinuxNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktn.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_kernel_module_loading: {
      value: containerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingToHclTerraform(struct!.nodeKernelModuleLoading),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._nodeKernelModuleLoading?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKernelModuleLoading = this._nodeKernelModuleLoading?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._nodeKernelModuleLoading.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._nodeKernelModuleLoading.internalValue = value.nodeKernelModuleLoading;
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

  // node_kernel_module_loading - computed: false, optional: true, required: false
  private _nodeKernelModuleLoading = new ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoadingOutputReference(this, "node_kernel_module_loading");
  public get nodeKernelModuleLoading() {
    return this._nodeKernelModuleLoading;
  }
  public putNodeKernelModuleLoading(value: ContainerClusterNodePoolAutoConfigLinuxNodeConfigNodeKernelModuleLoading) {
    this._nodeKernelModuleLoading.internalValue = value;
  }
  public resetNodeKernelModuleLoading() {
    this._nodeKernelModuleLoading.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKernelModuleLoadingInput() {
    return this._nodeKernelModuleLoading.internalValue;
  }
}
export interface ContainerClusterNodePoolAutoConfigNetworkTags {
  /**
  * List of network tags applied to auto-provisioned node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
}

export function containerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct?: ContainerClusterNodePoolAutoConfigNetworkTagsOutputReference | ContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
  }
}


export function containerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct?: ContainerClusterNodePoolAutoConfigNetworkTagsOutputReference | ContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolAutoConfigNetworkTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoConfigNetworkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoConfigNetworkTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
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
}
export interface ContainerClusterNodePoolAutoConfigNodeKubeletConfig {
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#insecure_kubelet_readonly_port_enabled ContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
}

export function containerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct?: ContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference | ContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insecure_kubelet_readonly_port_enabled: cdktn.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
  }
}


export function containerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct?: ContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference | ContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insecure_kubelet_readonly_port_enabled: {
      value: cdktn.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureKubeletReadonlyPortEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
    }
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
}
export interface ContainerClusterNodePoolAutoConfig {
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#resource_manager_tags ContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#linux_node_config ContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: ContainerClusterNodePoolAutoConfigLinuxNodeConfig;
  /**
  * network_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#network_tags ContainerCluster#network_tags}
  */
  readonly networkTags?: ContainerClusterNodePoolAutoConfigNetworkTags;
  /**
  * node_kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_kubelet_config ContainerCluster#node_kubelet_config}
  */
  readonly nodeKubeletConfig?: ContainerClusterNodePoolAutoConfigNodeKubeletConfig;
}

export function containerClusterNodePoolAutoConfigToTerraform(struct?: ContainerClusterNodePoolAutoConfigOutputReference | ContainerClusterNodePoolAutoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
    linux_node_config: containerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    network_tags: containerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct!.networkTags),
    node_kubelet_config: containerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct!.nodeKubeletConfig),
  }
}


export function containerClusterNodePoolAutoConfigToHclTerraform(struct?: ContainerClusterNodePoolAutoConfigOutputReference | ContainerClusterNodePoolAutoConfig): any {
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
    linux_node_config: {
      value: containerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolAutoConfigLinuxNodeConfigList",
    },
    network_tags: {
      value: containerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct!.networkTags),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolAutoConfigNetworkTagsList",
    },
    node_kubelet_config: {
      value: containerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct!.nodeKubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolAutoConfigNodeKubeletConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolAutoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._networkTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags?.internalValue;
    }
    if (this._nodeKubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKubeletConfig = this._nodeKubeletConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._networkTags.internalValue = undefined;
      this._nodeKubeletConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._networkTags.internalValue = value.networkTags;
      this._nodeKubeletConfig.internalValue = value.nodeKubeletConfig;
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

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new ContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: ContainerClusterNodePoolAutoConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags = new ContainerClusterNodePoolAutoConfigNetworkTagsOutputReference(this, "network_tags");
  public get networkTags() {
    return this._networkTags;
  }
  public putNetworkTags(value: ContainerClusterNodePoolAutoConfigNetworkTags) {
    this._networkTags.internalValue = value;
  }
  public resetNetworkTags() {
    this._networkTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags.internalValue;
  }

  // node_kubelet_config - computed: false, optional: true, required: false
  private _nodeKubeletConfig = new ContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference(this, "node_kubelet_config");
  public get nodeKubeletConfig() {
    return this._nodeKubeletConfig;
  }
  public putNodeKubeletConfig(value: ContainerClusterNodePoolAutoConfigNodeKubeletConfig) {
    this._nodeKubeletConfig.internalValue = value;
  }
  public resetNodeKubeletConfig() {
    this._nodeKubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKubeletConfigInput() {
    return this._nodeKubeletConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#secret_uri ContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_uri: cdktn.stringToTerraform(struct!.secretUri),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
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
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#fqdns ContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_certificate_config ContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fqdns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fqdns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_secret_manager_certificate_config: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktn.IResolvable | undefined) {
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
  private _gcpSecretManagerCertificateConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#certificate_authority_domain_config ContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktn.listMapper(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_authority_domain_config: {
      value: cdktn.listMapperHcl(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined) {
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
  private _certificateAuthorityDomainConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktn.IResolvable) {
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
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa {
  /**
  * URI for the Secret Manager secret that hosts the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_secret_uri ContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference {
    return new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert {
  /**
  * URI for the Secret Manager secret that hosts the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_secret_uri ContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert | undefined) {
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
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey {
  /**
  * URI for the Secret Manager secret that hosts the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcp_secret_manager_secret_uri ContainerCluster#gcp_secret_manager_secret_uri}
  */
  readonly gcpSecretManagerSecretUri?: string;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcp_secret_manager_secret_uri: cdktn.stringToTerraform(struct!.gcpSecretManagerSecretUri),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpSecretManagerSecretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerSecretUri = this._gcpSecretManagerSecretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey | undefined) {
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
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient {
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#cert ContainerCluster#cert}
  */
  readonly cert: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToTerraform(struct!.cert),
    key: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct!.key),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertList",
    },
    key: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient | cdktn.IResolvable | undefined) {
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
  private _cert = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientKey) {
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference {
    return new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader {
  /**
  * Configures the header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * Configures the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#value ContainerCluster#value}
  */
  readonly value: string[];
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader | cdktn.IResolvable | undefined) {
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference {
    return new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts {
  /**
  * Represent the capabilities of the registry host, specifying what operations a host is capable of performing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#capabilities ContainerCluster#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Specifies the maximum duration allowed for a connection attempt to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#dial_timeout ContainerCluster#dial_timeout}
  */
  readonly dialTimeout?: string;
  /**
  * Configures the registry host/mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#host ContainerCluster#host}
  */
  readonly host: string;
  /**
  * Indicate the host's API root endpoint is defined in the URL path rather than by the API specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#override_path ContainerCluster#override_path}
  */
  readonly overridePath?: boolean | cdktn.IResolvable;
  /**
  * ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#ca ContainerCluster#ca}
  */
  readonly ca?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#client ContainerCluster#client}
  */
  readonly client?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#header ContainerCluster#header}
  */
  readonly header?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capabilities),
    dial_timeout: cdktn.stringToTerraform(struct!.dialTimeout),
    host: cdktn.stringToTerraform(struct!.host),
    override_path: cdktn.booleanToTerraform(struct!.overridePath),
    ca: cdktn.listMapper(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToTerraform, true)(struct!.ca),
    client: cdktn.listMapper(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToTerraform, true)(struct!.client),
    header: cdktn.listMapper(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToTerraform, true)(struct!.header),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaToHclTerraform, true)(struct!.ca),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaList",
    },
    client: {
      value: cdktn.listMapperHcl(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientToHclTerraform, true)(struct!.client),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientList",
    },
    header: {
      value: cdktn.listMapperHcl(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts | cdktn.IResolvable | undefined) {
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
  private _ca = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCaList(this, "ca", false);
  public get ca() {
    return this._ca;
  }
  public putCa(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsCa[] | cdktn.IResolvable) {
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
  private _client = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClientList(this, "client", false);
  public get client() {
    return this._client;
  }
  public putClient(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsClient[] | cdktn.IResolvable) {
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
  private _header = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsHeader[] | cdktn.IResolvable) {
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference {
    return new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts {
  /**
  * Defines the host name of the registry server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#server ContainerCluster#server}
  */
  readonly server: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#hosts ContainerCluster#hosts}
  */
  readonly hosts?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server: cdktn.stringToTerraform(struct!.server),
    hosts: cdktn.listMapper(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToTerraform, true)(struct!.hosts),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server: {
      value: cdktn.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktn.listMapperHcl(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts | cdktn.IResolvable | undefined) {
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
  private _hosts = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsHosts[] | cdktn.IResolvable) {
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsList extends cdktn.ComplexList {
  public internalValue? : ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts[] | cdktn.IResolvable

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
  public get(index: number): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference {
    return new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups {
  /**
  * Whether writable cgroups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups | undefined) {
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
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#private_registry_access_config ContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig;
  /**
  * registry_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#registry_hosts ContainerCluster#registry_hosts}
  */
  readonly registryHosts?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts[] | cdktn.IResolvable;
  /**
  * writable_cgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#writable_cgroups ContainerCluster#writable_cgroups}
  */
  readonly writableCgroups?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_registry_access_config: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
    registry_hosts: cdktn.listMapper(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToTerraform, true)(struct!.registryHosts),
    writable_cgroups: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToTerraform(struct!.writableCgroups),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_registry_access_config: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigList",
    },
    registry_hosts: {
      value: cdktn.listMapperHcl(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsToHclTerraform, true)(struct!.registryHosts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsList",
    },
    writable_cgroups: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsToHclTerraform(struct!.writableCgroups),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined) {
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
  private _privateRegistryAccessConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig) {
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
  private _registryHosts = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHostsList(this, "registry_hosts", false);
  public get registryHosts() {
    return this._registryHosts;
  }
  public putRegistryHosts(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigRegistryHosts[] | cdktn.IResolvable) {
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
  private _writableCgroups = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroupsOutputReference(this, "writable_cgroups");
  public get writableCgroups() {
    return this._writableCgroups;
  }
  public putWritableCgroups(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigWritableCgroups) {
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
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined) {
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
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaults {
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#insecure_kubelet_readonly_port_enabled ContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#logging_variant ContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#containerd_config ContainerCluster#containerd_config}
  */
  readonly containerdConfig?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gcfs_config ContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    insecure_kubelet_readonly_port_enabled: cdktn.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    logging_variant: cdktn.stringToTerraform(struct!.loggingVariant),
    containerd_config: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct!.containerdConfig),
    gcfs_config: containerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct!.gcfsConfig),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    insecure_kubelet_readonly_port_enabled: {
      value: cdktn.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
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
    containerd_config: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigList",
    },
    gcfs_config: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._loggingVariant = undefined;
      this._containerdConfig.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._loggingVariant = value.loggingVariant;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._gcfsConfig.internalValue = value.gcfsConfig;
    }
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

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolDefaults {
  /**
  * node_config_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#node_config_defaults ContainerCluster#node_config_defaults}
  */
  readonly nodeConfigDefaults?: ContainerClusterNodePoolDefaultsNodeConfigDefaults;
}

export function containerClusterNodePoolDefaultsToTerraform(struct?: ContainerClusterNodePoolDefaultsOutputReference | ContainerClusterNodePoolDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_config_defaults: containerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct!.nodeConfigDefaults),
  }
}


export function containerClusterNodePoolDefaultsToHclTerraform(struct?: ContainerClusterNodePoolDefaultsOutputReference | ContainerClusterNodePoolDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_config_defaults: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct!.nodeConfigDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeConfigDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigDefaults = this._nodeConfigDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeConfigDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeConfigDefaults.internalValue = value.nodeConfigDefaults;
    }
  }

  // node_config_defaults - computed: false, optional: true, required: false
  private _nodeConfigDefaults = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference(this, "node_config_defaults");
  public get nodeConfigDefaults() {
    return this._nodeConfigDefaults;
  }
  public putNodeConfigDefaults(value: ContainerClusterNodePoolDefaultsNodeConfigDefaults) {
    this._nodeConfigDefaults.internalValue = value;
  }
  public resetNodeConfigDefaults() {
    this._nodeConfigDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigDefaultsInput() {
    return this._nodeConfigDefaults.internalValue;
  }
}
export interface ContainerClusterNotificationConfigPubsubFilter {
  /**
  * Can be used to filter what notifications are sent. Valid values include include UPGRADE_AVAILABLE_EVENT, UPGRADE_EVENT, SECURITY_BULLETIN_EVENT, and UPGRADE_INFO_EVENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#event_type ContainerCluster#event_type}
  */
  readonly eventType: string[];
}

export function containerClusterNotificationConfigPubsubFilterToTerraform(struct?: ContainerClusterNotificationConfigPubsubFilterOutputReference | ContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventType),
  }
}


export function containerClusterNotificationConfigPubsubFilterToHclTerraform(struct?: ContainerClusterNotificationConfigPubsubFilterOutputReference | ContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNotificationConfigPubsubFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNotificationConfigPubsubFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNotificationConfigPubsubFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string[]; 
  public get eventType() {
    return this.getListAttribute('event_type');
  }
  public set eventType(value: string[]) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }
}
export interface ContainerClusterNotificationConfigPubsub {
  /**
  * Whether or not the notification config is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#topic ContainerCluster#topic}
  */
  readonly topic?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#filter ContainerCluster#filter}
  */
  readonly filter?: ContainerClusterNotificationConfigPubsubFilter;
}

export function containerClusterNotificationConfigPubsubToTerraform(struct?: ContainerClusterNotificationConfigPubsubOutputReference | ContainerClusterNotificationConfigPubsub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    topic: cdktn.stringToTerraform(struct!.topic),
    filter: containerClusterNotificationConfigPubsubFilterToTerraform(struct!.filter),
  }
}


export function containerClusterNotificationConfigPubsubToHclTerraform(struct?: ContainerClusterNotificationConfigPubsubOutputReference | ContainerClusterNotificationConfigPubsub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: containerClusterNotificationConfigPubsubFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNotificationConfigPubsubFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNotificationConfigPubsubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNotificationConfigPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNotificationConfigPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topic = undefined;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topic = value.topic;
      this._filter.internalValue = value.filter;
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

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ContainerClusterNotificationConfigPubsubFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ContainerClusterNotificationConfigPubsubFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface ContainerClusterNotificationConfig {
  /**
  * pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#pubsub ContainerCluster#pubsub}
  */
  readonly pubsub: ContainerClusterNotificationConfigPubsub;
}

export function containerClusterNotificationConfigToTerraform(struct?: ContainerClusterNotificationConfigOutputReference | ContainerClusterNotificationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pubsub: containerClusterNotificationConfigPubsubToTerraform(struct!.pubsub),
  }
}


export function containerClusterNotificationConfigToHclTerraform(struct?: ContainerClusterNotificationConfigOutputReference | ContainerClusterNotificationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pubsub: {
      value: containerClusterNotificationConfigPubsubToHclTerraform(struct!.pubsub),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNotificationConfigPubsubList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNotificationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsub = this._pubsub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsub.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsub.internalValue = value.pubsub;
    }
  }

  // pubsub - computed: false, optional: false, required: true
  private _pubsub = new ContainerClusterNotificationConfigPubsubOutputReference(this, "pubsub");
  public get pubsub() {
    return this._pubsub;
  }
  public putPubsub(value: ContainerClusterNotificationConfigPubsub) {
    this._pubsub.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub.internalValue;
  }
}
export interface ContainerClusterPodAutoscaling {
  /**
  * 
  * 								HPA Profile is used to configure the Horizontal Pod Autoscaler (HPA) profile for the cluster.
  * 								Available options include:
  * 								- NONE: Customers explicitly opt-out of HPA profiles.
  * 								- PERFORMANCE: PERFORMANCE is used when customers opt-in to the performance HPA profile. In this profile we support a higher number of HPAs per cluster and faster metrics collection for workload autoscaling.
  * 							
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#hpa_profile ContainerCluster#hpa_profile}
  */
  readonly hpaProfile: string;
}

export function containerClusterPodAutoscalingToTerraform(struct?: ContainerClusterPodAutoscalingOutputReference | ContainerClusterPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hpa_profile: cdktn.stringToTerraform(struct!.hpaProfile),
  }
}


export function containerClusterPodAutoscalingToHclTerraform(struct?: ContainerClusterPodAutoscalingOutputReference | ContainerClusterPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hpa_profile: {
      value: cdktn.stringToHclTerraform(struct!.hpaProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterPodAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpaProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpaProfile = this._hpaProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hpaProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hpaProfile = value.hpaProfile;
    }
  }

  // hpa_profile - computed: false, optional: false, required: true
  private _hpaProfile?: string; 
  public get hpaProfile() {
    return this.getStringAttribute('hpa_profile');
  }
  public set hpaProfile(value: string) {
    this._hpaProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaProfileInput() {
    return this._hpaProfile;
  }
}
export interface ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /**
  * Whether the cluster master is accessible globally or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined) {
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
export interface ContainerClusterPrivateClusterConfig {
  /**
  * When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_private_endpoint ContainerCluster#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean | cdktn.IResolvable;
  /**
  * Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_private_nodes ContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktn.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#master_ipv4_cidr_block ContainerCluster#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * Subnetwork in cluster's network where master's endpoint will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#private_endpoint_subnetwork ContainerCluster#private_endpoint_subnetwork}
  */
  readonly privateEndpointSubnetwork?: string;
  /**
  * master_global_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#master_global_access_config ContainerCluster#master_global_access_config}
  */
  readonly masterGlobalAccessConfig?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig;
}

export function containerClusterPrivateClusterConfigToTerraform(struct?: ContainerClusterPrivateClusterConfigOutputReference | ContainerClusterPrivateClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_private_endpoint: cdktn.booleanToTerraform(struct!.enablePrivateEndpoint),
    enable_private_nodes: cdktn.booleanToTerraform(struct!.enablePrivateNodes),
    master_ipv4_cidr_block: cdktn.stringToTerraform(struct!.masterIpv4CidrBlock),
    private_endpoint_subnetwork: cdktn.stringToTerraform(struct!.privateEndpointSubnetwork),
    master_global_access_config: containerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct!.masterGlobalAccessConfig),
  }
}


export function containerClusterPrivateClusterConfigToHclTerraform(struct?: ContainerClusterPrivateClusterConfigOutputReference | ContainerClusterPrivateClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_private_endpoint: {
      value: cdktn.booleanToHclTerraform(struct!.enablePrivateEndpoint),
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
    master_ipv4_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.masterIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.privateEndpointSubnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_global_access_config: {
      value: containerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct!.masterGlobalAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterPrivateClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterPrivateClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._masterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterIpv4CidrBlock = this._masterIpv4CidrBlock;
    }
    if (this._privateEndpointSubnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointSubnetwork = this._privateEndpointSubnetwork;
    }
    if (this._masterGlobalAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterGlobalAccessConfig = this._masterGlobalAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterPrivateClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateEndpoint = undefined;
      this._enablePrivateNodes = undefined;
      this._masterIpv4CidrBlock = undefined;
      this._privateEndpointSubnetwork = undefined;
      this._masterGlobalAccessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._privateEndpointSubnetwork = value.privateEndpointSubnetwork;
      this._masterGlobalAccessConfig.internalValue = value.masterGlobalAccessConfig;
    }
  }

  // enable_private_endpoint - computed: false, optional: true, required: false
  private _enablePrivateEndpoint?: boolean | cdktn.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktn.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  public resetEnablePrivateEndpoint() {
    this._enablePrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // enable_private_nodes - computed: false, optional: true, required: false
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

  // master_ipv4_cidr_block - computed: true, optional: true, required: false
  private _masterIpv4CidrBlock?: string; 
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }
  public set masterIpv4CidrBlock(value: string) {
    this._masterIpv4CidrBlock = value;
  }
  public resetMasterIpv4CidrBlock() {
    this._masterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpv4CidrBlockInput() {
    return this._masterIpv4CidrBlock;
  }

  // peering_name - computed: true, optional: false, required: false
  public get peeringName() {
    return this.getStringAttribute('peering_name');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_subnetwork - computed: false, optional: true, required: false
  private _privateEndpointSubnetwork?: string; 
  public get privateEndpointSubnetwork() {
    return this.getStringAttribute('private_endpoint_subnetwork');
  }
  public set privateEndpointSubnetwork(value: string) {
    this._privateEndpointSubnetwork = value;
  }
  public resetPrivateEndpointSubnetwork() {
    this._privateEndpointSubnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointSubnetworkInput() {
    return this._privateEndpointSubnetwork;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // master_global_access_config - computed: false, optional: true, required: false
  private _masterGlobalAccessConfig = new ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference(this, "master_global_access_config");
  public get masterGlobalAccessConfig() {
    return this._masterGlobalAccessConfig;
  }
  public putMasterGlobalAccessConfig(value: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig) {
    this._masterGlobalAccessConfig.internalValue = value;
  }
  public resetMasterGlobalAccessConfig() {
    this._masterGlobalAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterGlobalAccessConfigInput() {
    return this._masterGlobalAccessConfig.internalValue;
  }
}
export interface ContainerClusterRbacBindingConfig {
  /**
  * Setting this to true will allow any ClusterRoleBinding and RoleBinding with subjects system:authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_insecure_binding_system_authenticated ContainerCluster#enable_insecure_binding_system_authenticated}
  */
  readonly enableInsecureBindingSystemAuthenticated?: boolean | cdktn.IResolvable;
  /**
  * Setting this to true will allow any ClusterRoleBinding and RoleBinding with subjects system:anonymous or system:unauthenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_insecure_binding_system_unauthenticated ContainerCluster#enable_insecure_binding_system_unauthenticated}
  */
  readonly enableInsecureBindingSystemUnauthenticated?: boolean | cdktn.IResolvable;
}

export function containerClusterRbacBindingConfigToTerraform(struct?: ContainerClusterRbacBindingConfigOutputReference | ContainerClusterRbacBindingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_insecure_binding_system_authenticated: cdktn.booleanToTerraform(struct!.enableInsecureBindingSystemAuthenticated),
    enable_insecure_binding_system_unauthenticated: cdktn.booleanToTerraform(struct!.enableInsecureBindingSystemUnauthenticated),
  }
}


export function containerClusterRbacBindingConfigToHclTerraform(struct?: ContainerClusterRbacBindingConfigOutputReference | ContainerClusterRbacBindingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_insecure_binding_system_authenticated: {
      value: cdktn.booleanToHclTerraform(struct!.enableInsecureBindingSystemAuthenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_insecure_binding_system_unauthenticated: {
      value: cdktn.booleanToHclTerraform(struct!.enableInsecureBindingSystemUnauthenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterRbacBindingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterRbacBindingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInsecureBindingSystemAuthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInsecureBindingSystemAuthenticated = this._enableInsecureBindingSystemAuthenticated;
    }
    if (this._enableInsecureBindingSystemUnauthenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInsecureBindingSystemUnauthenticated = this._enableInsecureBindingSystemUnauthenticated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterRbacBindingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInsecureBindingSystemAuthenticated = undefined;
      this._enableInsecureBindingSystemUnauthenticated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInsecureBindingSystemAuthenticated = value.enableInsecureBindingSystemAuthenticated;
      this._enableInsecureBindingSystemUnauthenticated = value.enableInsecureBindingSystemUnauthenticated;
    }
  }

  // enable_insecure_binding_system_authenticated - computed: false, optional: true, required: false
  private _enableInsecureBindingSystemAuthenticated?: boolean | cdktn.IResolvable; 
  public get enableInsecureBindingSystemAuthenticated() {
    return this.getBooleanAttribute('enable_insecure_binding_system_authenticated');
  }
  public set enableInsecureBindingSystemAuthenticated(value: boolean | cdktn.IResolvable) {
    this._enableInsecureBindingSystemAuthenticated = value;
  }
  public resetEnableInsecureBindingSystemAuthenticated() {
    this._enableInsecureBindingSystemAuthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInsecureBindingSystemAuthenticatedInput() {
    return this._enableInsecureBindingSystemAuthenticated;
  }

  // enable_insecure_binding_system_unauthenticated - computed: false, optional: true, required: false
  private _enableInsecureBindingSystemUnauthenticated?: boolean | cdktn.IResolvable; 
  public get enableInsecureBindingSystemUnauthenticated() {
    return this.getBooleanAttribute('enable_insecure_binding_system_unauthenticated');
  }
  public set enableInsecureBindingSystemUnauthenticated(value: boolean | cdktn.IResolvable) {
    this._enableInsecureBindingSystemUnauthenticated = value;
  }
  public resetEnableInsecureBindingSystemUnauthenticated() {
    this._enableInsecureBindingSystemUnauthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInsecureBindingSystemUnauthenticatedInput() {
    return this._enableInsecureBindingSystemUnauthenticated;
  }
}
export interface ContainerClusterReleaseChannel {
  /**
  * The selected release channel. Accepted values are:
  * * UNSPECIFIED: Not set.
  * * RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
  * * REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
  * * STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky.
  * * EXTENDED: GKE provides extended support for Kubernetes minor versions through the Extended channel. With this channel, you can stay on a minor version for up to 24 months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#channel ContainerCluster#channel}
  */
  readonly channel: string;
}

export function containerClusterReleaseChannelToTerraform(struct?: ContainerClusterReleaseChannelOutputReference | ContainerClusterReleaseChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel: cdktn.stringToTerraform(struct!.channel),
  }
}


export function containerClusterReleaseChannelToHclTerraform(struct?: ContainerClusterReleaseChannelOutputReference | ContainerClusterReleaseChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterReleaseChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterReleaseChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterReleaseChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface ContainerClusterResourceUsageExportConfigBigqueryDestination {
  /**
  * The ID of a BigQuery Dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#dataset_id ContainerCluster#dataset_id}
  */
  readonly datasetId: string;
}

export function containerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct?: ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | ContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
  }
}


export function containerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct?: ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | ContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterResourceUsageExportConfigBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterResourceUsageExportConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }
}
export interface ContainerClusterResourceUsageExportConfig {
  /**
  * Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_network_egress_metering ContainerCluster#enable_network_egress_metering}
  */
  readonly enableNetworkEgressMetering?: boolean | cdktn.IResolvable;
  /**
  * Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enable_resource_consumption_metering ContainerCluster#enable_resource_consumption_metering}
  */
  readonly enableResourceConsumptionMetering?: boolean | cdktn.IResolvable;
  /**
  * bigquery_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#bigquery_destination ContainerCluster#bigquery_destination}
  */
  readonly bigqueryDestination: ContainerClusterResourceUsageExportConfigBigqueryDestination;
}

export function containerClusterResourceUsageExportConfigToTerraform(struct?: ContainerClusterResourceUsageExportConfigOutputReference | ContainerClusterResourceUsageExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_network_egress_metering: cdktn.booleanToTerraform(struct!.enableNetworkEgressMetering),
    enable_resource_consumption_metering: cdktn.booleanToTerraform(struct!.enableResourceConsumptionMetering),
    bigquery_destination: containerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}


export function containerClusterResourceUsageExportConfigToHclTerraform(struct?: ContainerClusterResourceUsageExportConfigOutputReference | ContainerClusterResourceUsageExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_network_egress_metering: {
      value: cdktn.booleanToHclTerraform(struct!.enableNetworkEgressMetering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_resource_consumption_metering: {
      value: cdktn.booleanToHclTerraform(struct!.enableResourceConsumptionMetering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_destination: {
      value: containerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct!.bigqueryDestination),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterResourceUsageExportConfigBigqueryDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterResourceUsageExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterResourceUsageExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNetworkEgressMetering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkEgressMetering = this._enableNetworkEgressMetering;
    }
    if (this._enableResourceConsumptionMetering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceConsumptionMetering = this._enableResourceConsumptionMetering;
    }
    if (this._bigqueryDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterResourceUsageExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNetworkEgressMetering = undefined;
      this._enableResourceConsumptionMetering = undefined;
      this._bigqueryDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNetworkEgressMetering = value.enableNetworkEgressMetering;
      this._enableResourceConsumptionMetering = value.enableResourceConsumptionMetering;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
    }
  }

  // enable_network_egress_metering - computed: false, optional: true, required: false
  private _enableNetworkEgressMetering?: boolean | cdktn.IResolvable; 
  public get enableNetworkEgressMetering() {
    return this.getBooleanAttribute('enable_network_egress_metering');
  }
  public set enableNetworkEgressMetering(value: boolean | cdktn.IResolvable) {
    this._enableNetworkEgressMetering = value;
  }
  public resetEnableNetworkEgressMetering() {
    this._enableNetworkEgressMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkEgressMeteringInput() {
    return this._enableNetworkEgressMetering;
  }

  // enable_resource_consumption_metering - computed: false, optional: true, required: false
  private _enableResourceConsumptionMetering?: boolean | cdktn.IResolvable; 
  public get enableResourceConsumptionMetering() {
    return this.getBooleanAttribute('enable_resource_consumption_metering');
  }
  public set enableResourceConsumptionMetering(value: boolean | cdktn.IResolvable) {
    this._enableResourceConsumptionMetering = value;
  }
  public resetEnableResourceConsumptionMetering() {
    this._enableResourceConsumptionMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceConsumptionMeteringInput() {
    return this._enableResourceConsumptionMetering;
  }

  // bigquery_destination - computed: false, optional: false, required: true
  private _bigqueryDestination = new ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference(this, "bigquery_destination");
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }
  public putBigqueryDestination(value: ContainerClusterResourceUsageExportConfigBigqueryDestination) {
    this._bigqueryDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationInput() {
    return this._bigqueryDestination.internalValue;
  }
}
export interface ContainerClusterRollbackSafeUpgrade {
  /**
  * A user-defined period that the cluster remains in the rollbackable state. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "604800s" for 7 days. Minimum is 6 hours, maximum is 7 days. If omitted, the two-step upgrade is skipped and a standard one-step upgrade is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#control_plane_soak_duration ContainerCluster#control_plane_soak_duration}
  */
  readonly controlPlaneSoakDuration?: string;
}

export function containerClusterRollbackSafeUpgradeToTerraform(struct?: ContainerClusterRollbackSafeUpgradeOutputReference | ContainerClusterRollbackSafeUpgrade): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    control_plane_soak_duration: cdktn.stringToTerraform(struct!.controlPlaneSoakDuration),
  }
}


export function containerClusterRollbackSafeUpgradeToHclTerraform(struct?: ContainerClusterRollbackSafeUpgradeOutputReference | ContainerClusterRollbackSafeUpgrade): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    control_plane_soak_duration: {
      value: cdktn.stringToHclTerraform(struct!.controlPlaneSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterRollbackSafeUpgradeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterRollbackSafeUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneSoakDuration = this._controlPlaneSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterRollbackSafeUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneSoakDuration = value.controlPlaneSoakDuration;
    }
  }

  // control_plane_soak_duration - computed: false, optional: true, required: false
  private _controlPlaneSoakDuration?: string; 
  public get controlPlaneSoakDuration() {
    return this.getStringAttribute('control_plane_soak_duration');
  }
  public set controlPlaneSoakDuration(value: string) {
    this._controlPlaneSoakDuration = value;
  }
  public resetControlPlaneSoakDuration() {
    this._controlPlaneSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneSoakDurationInput() {
    return this._controlPlaneSoakDuration;
  }
}
export interface ContainerClusterSecretManagerConfigRotationConfig {
  /**
  * Enable the Secret manager auto rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The interval between two consecutive rotations. Default rotation interval is 2 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#rotation_interval ContainerCluster#rotation_interval}
  */
  readonly rotationInterval?: string;
}

export function containerClusterSecretManagerConfigRotationConfigToTerraform(struct?: ContainerClusterSecretManagerConfigRotationConfigOutputReference | ContainerClusterSecretManagerConfigRotationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    rotation_interval: cdktn.stringToTerraform(struct!.rotationInterval),
  }
}


export function containerClusterSecretManagerConfigRotationConfigToHclTerraform(struct?: ContainerClusterSecretManagerConfigRotationConfigOutputReference | ContainerClusterSecretManagerConfigRotationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotation_interval: {
      value: cdktn.stringToHclTerraform(struct!.rotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterSecretManagerConfigRotationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterSecretManagerConfigRotationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationInterval = this._rotationInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterSecretManagerConfigRotationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rotationInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rotationInterval = value.rotationInterval;
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

  // rotation_interval - computed: true, optional: true, required: false
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }
}
export interface ContainerClusterSecretManagerConfig {
  /**
  * Enable the Secret manager csi component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * rotation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#rotation_config ContainerCluster#rotation_config}
  */
  readonly rotationConfig?: ContainerClusterSecretManagerConfigRotationConfig;
}

export function containerClusterSecretManagerConfigToTerraform(struct?: ContainerClusterSecretManagerConfigOutputReference | ContainerClusterSecretManagerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    rotation_config: containerClusterSecretManagerConfigRotationConfigToTerraform(struct!.rotationConfig),
  }
}


export function containerClusterSecretManagerConfigToHclTerraform(struct?: ContainerClusterSecretManagerConfigOutputReference | ContainerClusterSecretManagerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotation_config: {
      value: containerClusterSecretManagerConfigRotationConfigToHclTerraform(struct!.rotationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterSecretManagerConfigRotationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterSecretManagerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterSecretManagerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationConfig = this._rotationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterSecretManagerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rotationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rotationConfig.internalValue = value.rotationConfig;
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

  // rotation_config - computed: false, optional: true, required: false
  private _rotationConfig = new ContainerClusterSecretManagerConfigRotationConfigOutputReference(this, "rotation_config");
  public get rotationConfig() {
    return this._rotationConfig;
  }
  public putRotationConfig(value: ContainerClusterSecretManagerConfigRotationConfig) {
    this._rotationConfig.internalValue = value;
  }
  public resetRotationConfig() {
    this._rotationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationConfigInput() {
    return this._rotationConfig.internalValue;
  }
}
export interface ContainerClusterSecretSyncConfigRotationConfig {
  /**
  * Enable the Secret sync auto rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The interval between two consecutive rotations. Default rotation interval is 2 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#rotation_interval ContainerCluster#rotation_interval}
  */
  readonly rotationInterval?: string;
}

export function containerClusterSecretSyncConfigRotationConfigToTerraform(struct?: ContainerClusterSecretSyncConfigRotationConfigOutputReference | ContainerClusterSecretSyncConfigRotationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    rotation_interval: cdktn.stringToTerraform(struct!.rotationInterval),
  }
}


export function containerClusterSecretSyncConfigRotationConfigToHclTerraform(struct?: ContainerClusterSecretSyncConfigRotationConfigOutputReference | ContainerClusterSecretSyncConfigRotationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotation_interval: {
      value: cdktn.stringToHclTerraform(struct!.rotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterSecretSyncConfigRotationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterSecretSyncConfigRotationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationInterval = this._rotationInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterSecretSyncConfigRotationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rotationInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rotationInterval = value.rotationInterval;
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

  // rotation_interval - computed: true, optional: true, required: false
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }
}
export interface ContainerClusterSecretSyncConfig {
  /**
  * Enable the Sync as k8s secret add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * rotation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#rotation_config ContainerCluster#rotation_config}
  */
  readonly rotationConfig?: ContainerClusterSecretSyncConfigRotationConfig;
}

export function containerClusterSecretSyncConfigToTerraform(struct?: ContainerClusterSecretSyncConfigOutputReference | ContainerClusterSecretSyncConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    rotation_config: containerClusterSecretSyncConfigRotationConfigToTerraform(struct!.rotationConfig),
  }
}


export function containerClusterSecretSyncConfigToHclTerraform(struct?: ContainerClusterSecretSyncConfigOutputReference | ContainerClusterSecretSyncConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotation_config: {
      value: containerClusterSecretSyncConfigRotationConfigToHclTerraform(struct!.rotationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterSecretSyncConfigRotationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterSecretSyncConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterSecretSyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationConfig = this._rotationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterSecretSyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rotationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rotationConfig.internalValue = value.rotationConfig;
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

  // rotation_config - computed: false, optional: true, required: false
  private _rotationConfig = new ContainerClusterSecretSyncConfigRotationConfigOutputReference(this, "rotation_config");
  public get rotationConfig() {
    return this._rotationConfig;
  }
  public putRotationConfig(value: ContainerClusterSecretSyncConfigRotationConfig) {
    this._rotationConfig.internalValue = value;
  }
  public resetRotationConfig() {
    this._rotationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationConfigInput() {
    return this._rotationConfig.internalValue;
  }
}
export interface ContainerClusterSecurityPostureConfig {
  /**
  * Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include DISABLED, BASIC, and ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode?: string;
  /**
  * Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include VULNERABILITY_DISABLED, VULNERABILITY_BASIC and VULNERABILITY_ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#vulnerability_mode ContainerCluster#vulnerability_mode}
  */
  readonly vulnerabilityMode?: string;
}

export function containerClusterSecurityPostureConfigToTerraform(struct?: ContainerClusterSecurityPostureConfigOutputReference | ContainerClusterSecurityPostureConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    vulnerability_mode: cdktn.stringToTerraform(struct!.vulnerabilityMode),
  }
}


export function containerClusterSecurityPostureConfigToHclTerraform(struct?: ContainerClusterSecurityPostureConfigOutputReference | ContainerClusterSecurityPostureConfig): any {
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
    vulnerability_mode: {
      value: cdktn.stringToHclTerraform(struct!.vulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterSecurityPostureConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterSecurityPostureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityMode = this._vulnerabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterSecurityPostureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._vulnerabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._vulnerabilityMode = value.vulnerabilityMode;
    }
  }

  // mode - computed: true, optional: true, required: false
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

  // vulnerability_mode - computed: true, optional: true, required: false
  private _vulnerabilityMode?: string; 
  public get vulnerabilityMode() {
    return this.getStringAttribute('vulnerability_mode');
  }
  public set vulnerabilityMode(value: string) {
    this._vulnerabilityMode = value;
  }
  public resetVulnerabilityMode() {
    this._vulnerabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityModeInput() {
    return this._vulnerabilityMode;
  }
}
export interface ContainerClusterServiceExternalIpsConfig {
  /**
  * When enabled, services with external ips specified will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterServiceExternalIpsConfigToTerraform(struct?: ContainerClusterServiceExternalIpsConfigOutputReference | ContainerClusterServiceExternalIpsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterServiceExternalIpsConfigToHclTerraform(struct?: ContainerClusterServiceExternalIpsConfigOutputReference | ContainerClusterServiceExternalIpsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterServiceExternalIpsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterServiceExternalIpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterServiceExternalIpsConfig | undefined) {
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
export interface ContainerClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#create ContainerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#delete ContainerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#read ContainerCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#update ContainerCluster#update}
  */
  readonly update?: string;
}

export function containerClusterTimeoutsToTerraform(struct?: ContainerClusterTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function containerClusterTimeoutsToHclTerraform(struct?: ContainerClusterTimeouts | cdktn.IResolvable): any {
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
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
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

export class ContainerClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerClusterTimeouts | cdktn.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface ContainerClusterUserManagedKeysConfig {
  /**
  * The Certificate Authority Service caPool to use for the aggreation CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#aggregation_ca ContainerCluster#aggregation_ca}
  */
  readonly aggregationCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the cluster CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#cluster_ca ContainerCluster#cluster_ca}
  */
  readonly clusterCa?: string;
  /**
  * The Cloud KMS cryptoKey to use for Confidential Hyperdisk on the control plane nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#control_plane_disk_encryption_key ContainerCluster#control_plane_disk_encryption_key}
  */
  readonly controlPlaneDiskEncryptionKey?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd API CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#etcd_api_ca ContainerCluster#etcd_api_ca}
  */
  readonly etcdApiCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd peer CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#etcd_peer_ca ContainerCluster#etcd_peer_ca}
  */
  readonly etcdPeerCa?: string;
  /**
  * Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#gkeops_etcd_backup_encryption_key ContainerCluster#gkeops_etcd_backup_encryption_key}
  */
  readonly gkeopsEtcdBackupEncryptionKey?: string;
  /**
  * The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#service_account_signing_keys ContainerCluster#service_account_signing_keys}
  */
  readonly serviceAccountSigningKeys?: string[];
  /**
  * The Cloud KMS cryptoKeyVersions to use for verifying service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#service_account_verification_keys ContainerCluster#service_account_verification_keys}
  */
  readonly serviceAccountVerificationKeys?: string[];
}

export function containerClusterUserManagedKeysConfigToTerraform(struct?: ContainerClusterUserManagedKeysConfigOutputReference | ContainerClusterUserManagedKeysConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation_ca: cdktn.stringToTerraform(struct!.aggregationCa),
    cluster_ca: cdktn.stringToTerraform(struct!.clusterCa),
    control_plane_disk_encryption_key: cdktn.stringToTerraform(struct!.controlPlaneDiskEncryptionKey),
    etcd_api_ca: cdktn.stringToTerraform(struct!.etcdApiCa),
    etcd_peer_ca: cdktn.stringToTerraform(struct!.etcdPeerCa),
    gkeops_etcd_backup_encryption_key: cdktn.stringToTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
    service_account_signing_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serviceAccountSigningKeys),
    service_account_verification_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serviceAccountVerificationKeys),
  }
}


export function containerClusterUserManagedKeysConfigToHclTerraform(struct?: ContainerClusterUserManagedKeysConfigOutputReference | ContainerClusterUserManagedKeysConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation_ca: {
      value: cdktn.stringToHclTerraform(struct!.aggregationCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ca: {
      value: cdktn.stringToHclTerraform(struct!.clusterCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_disk_encryption_key: {
      value: cdktn.stringToHclTerraform(struct!.controlPlaneDiskEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_api_ca: {
      value: cdktn.stringToHclTerraform(struct!.etcdApiCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_peer_ca: {
      value: cdktn.stringToHclTerraform(struct!.etcdPeerCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gkeops_etcd_backup_encryption_key: {
      value: cdktn.stringToHclTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_signing_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serviceAccountSigningKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_account_verification_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serviceAccountVerificationKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterUserManagedKeysConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterUserManagedKeysConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationCa = this._aggregationCa;
    }
    if (this._clusterCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCa = this._clusterCa;
    }
    if (this._controlPlaneDiskEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneDiskEncryptionKey = this._controlPlaneDiskEncryptionKey;
    }
    if (this._etcdApiCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdApiCa = this._etcdApiCa;
    }
    if (this._etcdPeerCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdPeerCa = this._etcdPeerCa;
    }
    if (this._gkeopsEtcdBackupEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeopsEtcdBackupEncryptionKey = this._gkeopsEtcdBackupEncryptionKey;
    }
    if (this._serviceAccountSigningKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSigningKeys = this._serviceAccountSigningKeys;
    }
    if (this._serviceAccountVerificationKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountVerificationKeys = this._serviceAccountVerificationKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterUserManagedKeysConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationCa = undefined;
      this._clusterCa = undefined;
      this._controlPlaneDiskEncryptionKey = undefined;
      this._etcdApiCa = undefined;
      this._etcdPeerCa = undefined;
      this._gkeopsEtcdBackupEncryptionKey = undefined;
      this._serviceAccountSigningKeys = undefined;
      this._serviceAccountVerificationKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationCa = value.aggregationCa;
      this._clusterCa = value.clusterCa;
      this._controlPlaneDiskEncryptionKey = value.controlPlaneDiskEncryptionKey;
      this._etcdApiCa = value.etcdApiCa;
      this._etcdPeerCa = value.etcdPeerCa;
      this._gkeopsEtcdBackupEncryptionKey = value.gkeopsEtcdBackupEncryptionKey;
      this._serviceAccountSigningKeys = value.serviceAccountSigningKeys;
      this._serviceAccountVerificationKeys = value.serviceAccountVerificationKeys;
    }
  }

  // aggregation_ca - computed: false, optional: true, required: false
  private _aggregationCa?: string; 
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
  }
  public set aggregationCa(value: string) {
    this._aggregationCa = value;
  }
  public resetAggregationCa() {
    this._aggregationCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationCaInput() {
    return this._aggregationCa;
  }

  // cluster_ca - computed: false, optional: true, required: false
  private _clusterCa?: string; 
  public get clusterCa() {
    return this.getStringAttribute('cluster_ca');
  }
  public set clusterCa(value: string) {
    this._clusterCa = value;
  }
  public resetClusterCa() {
    this._clusterCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaInput() {
    return this._clusterCa;
  }

  // control_plane_disk_encryption_key - computed: false, optional: true, required: false
  private _controlPlaneDiskEncryptionKey?: string; 
  public get controlPlaneDiskEncryptionKey() {
    return this.getStringAttribute('control_plane_disk_encryption_key');
  }
  public set controlPlaneDiskEncryptionKey(value: string) {
    this._controlPlaneDiskEncryptionKey = value;
  }
  public resetControlPlaneDiskEncryptionKey() {
    this._controlPlaneDiskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneDiskEncryptionKeyInput() {
    return this._controlPlaneDiskEncryptionKey;
  }

  // control_plane_disk_encryption_key_versions - computed: true, optional: false, required: false
  public get controlPlaneDiskEncryptionKeyVersions() {
    return cdktn.Fn.tolist(this.getListAttribute('control_plane_disk_encryption_key_versions'));
  }

  // etcd_api_ca - computed: false, optional: true, required: false
  private _etcdApiCa?: string; 
  public get etcdApiCa() {
    return this.getStringAttribute('etcd_api_ca');
  }
  public set etcdApiCa(value: string) {
    this._etcdApiCa = value;
  }
  public resetEtcdApiCa() {
    this._etcdApiCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdApiCaInput() {
    return this._etcdApiCa;
  }

  // etcd_peer_ca - computed: false, optional: true, required: false
  private _etcdPeerCa?: string; 
  public get etcdPeerCa() {
    return this.getStringAttribute('etcd_peer_ca');
  }
  public set etcdPeerCa(value: string) {
    this._etcdPeerCa = value;
  }
  public resetEtcdPeerCa() {
    this._etcdPeerCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdPeerCaInput() {
    return this._etcdPeerCa;
  }

  // gkeops_etcd_backup_encryption_key - computed: false, optional: true, required: false
  private _gkeopsEtcdBackupEncryptionKey?: string; 
  public get gkeopsEtcdBackupEncryptionKey() {
    return this.getStringAttribute('gkeops_etcd_backup_encryption_key');
  }
  public set gkeopsEtcdBackupEncryptionKey(value: string) {
    this._gkeopsEtcdBackupEncryptionKey = value;
  }
  public resetGkeopsEtcdBackupEncryptionKey() {
    this._gkeopsEtcdBackupEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeopsEtcdBackupEncryptionKeyInput() {
    return this._gkeopsEtcdBackupEncryptionKey;
  }

  // service_account_signing_keys - computed: false, optional: true, required: false
  private _serviceAccountSigningKeys?: string[]; 
  public get serviceAccountSigningKeys() {
    return cdktn.Fn.tolist(this.getListAttribute('service_account_signing_keys'));
  }
  public set serviceAccountSigningKeys(value: string[]) {
    this._serviceAccountSigningKeys = value;
  }
  public resetServiceAccountSigningKeys() {
    this._serviceAccountSigningKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSigningKeysInput() {
    return this._serviceAccountSigningKeys;
  }

  // service_account_verification_keys - computed: false, optional: true, required: false
  private _serviceAccountVerificationKeys?: string[]; 
  public get serviceAccountVerificationKeys() {
    return cdktn.Fn.tolist(this.getListAttribute('service_account_verification_keys'));
  }
  public set serviceAccountVerificationKeys(value: string[]) {
    this._serviceAccountVerificationKeys = value;
  }
  public resetServiceAccountVerificationKeys() {
    this._serviceAccountVerificationKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountVerificationKeysInput() {
    return this._serviceAccountVerificationKeys;
  }
}
export interface ContainerClusterVerticalPodAutoscaling {
  /**
  * Enables vertical pod autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function containerClusterVerticalPodAutoscalingToTerraform(struct?: ContainerClusterVerticalPodAutoscalingOutputReference | ContainerClusterVerticalPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterVerticalPodAutoscalingToHclTerraform(struct?: ContainerClusterVerticalPodAutoscalingOutputReference | ContainerClusterVerticalPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ContainerClusterVerticalPodAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterVerticalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterVerticalPodAutoscaling | undefined) {
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
export interface ContainerClusterWorkloadIdentityConfig {
  /**
  * The workload pool to attach all Kubernetes service accounts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/container_cluster#workload_pool ContainerCluster#workload_pool}
  */
  readonly workloadPool?: string;
}

export function containerClusterWorkloadIdentityConfigToTerraform(struct?: ContainerClusterWorkloadIdentityConfigOutputReference | ContainerClusterWorkloadIdentityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workload_pool: cdktn.stringToTerraform(struct!.workloadPool),
  }
}


export function containerClusterWorkloadIdentityConfigToHclTerraform(struct?: ContainerClusterWorkloadIdentityConfigOutputReference | ContainerClusterWorkloadIdentityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workload_pool: {
      value: cdktn.stringToHclTerraform(struct!.workloadPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterWorkloadIdentityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadPool = this._workloadPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workloadPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workloadPool = value.workloadPool;
    }
  }

  // workload_pool - computed: false, optional: true, required: false
  private _workloadPool?: string; 
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
  public set workloadPool(value: string) {
    this._workloadPool = value;
  }
  public resetWorkloadPool() {
    this._workloadPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPoolInput() {
    return this._workloadPool;
  }
}
