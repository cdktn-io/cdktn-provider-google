/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ManagedKafkaConnectClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name. This value is structured like: 'my-connect-cluster-id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#connect_cluster_id ManagedKafkaConnectCluster#connect_cluster_id}
  */
  readonly connectClusterId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#deletion_policy ManagedKafkaConnectCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#id ManagedKafkaConnectCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#kafka_cluster ManagedKafkaConnectCluster#kafka_cluster}
  */
  readonly kafkaCluster: string;
  /**
  * List of label KEY=VALUE pairs to add. Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#labels ManagedKafkaConnectCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#location ManagedKafkaConnectCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#project ManagedKafkaConnectCluster#project}
  */
  readonly project?: string;
  /**
  * capacity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#capacity_config ManagedKafkaConnectCluster#capacity_config}
  */
  readonly capacityConfig: ManagedKafkaConnectClusterCapacityConfig;
  /**
  * gcp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#gcp_config ManagedKafkaConnectCluster#gcp_config}
  */
  readonly gcpConfig: ManagedKafkaConnectClusterGcpConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#timeouts ManagedKafkaConnectCluster#timeouts}
  */
  readonly timeouts?: ManagedKafkaConnectClusterTimeouts;
}
export interface ManagedKafkaConnectClusterCapacityConfig {
  /**
  * The memory to provision for the cluster in bytes. The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#memory_bytes ManagedKafkaConnectCluster#memory_bytes}
  */
  readonly memoryBytes: string;
  /**
  * The number of vCPUs to provision for the cluster. The minimum is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#vcpu_count ManagedKafkaConnectCluster#vcpu_count}
  */
  readonly vcpuCount: string;
}

export function managedKafkaConnectClusterCapacityConfigToTerraform(struct?: ManagedKafkaConnectClusterCapacityConfigOutputReference | ManagedKafkaConnectClusterCapacityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_bytes: cdktn.stringToTerraform(struct!.memoryBytes),
    vcpu_count: cdktn.stringToTerraform(struct!.vcpuCount),
  }
}


export function managedKafkaConnectClusterCapacityConfigToHclTerraform(struct?: ManagedKafkaConnectClusterCapacityConfigOutputReference | ManagedKafkaConnectClusterCapacityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_bytes: {
      value: cdktn.stringToHclTerraform(struct!.memoryBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpu_count: {
      value: cdktn.stringToHclTerraform(struct!.vcpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKafkaConnectClusterCapacityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedKafkaConnectClusterCapacityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryBytes = this._memoryBytes;
    }
    if (this._vcpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpuCount = this._vcpuCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKafkaConnectClusterCapacityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryBytes = undefined;
      this._vcpuCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryBytes = value.memoryBytes;
      this._vcpuCount = value.vcpuCount;
    }
  }

  // memory_bytes - computed: false, optional: false, required: true
  private _memoryBytes?: string; 
  public get memoryBytes() {
    return this.getStringAttribute('memory_bytes');
  }
  public set memoryBytes(value: string) {
    this._memoryBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBytesInput() {
    return this._memoryBytes;
  }

  // vcpu_count - computed: false, optional: false, required: true
  private _vcpuCount?: string; 
  public get vcpuCount() {
    return this.getStringAttribute('vcpu_count');
  }
  public set vcpuCount(value: string) {
    this._vcpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuCountInput() {
    return this._vcpuCount;
  }
}
export interface ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs {
  /**
  * Additional subnets may be specified. They may be in another region, but must be in the same VPC network. The Connect workers can communicate with network endpoints in either the primary or additional subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#additional_subnets ManagedKafkaConnectCluster#additional_subnets}
  */
  readonly additionalSubnets?: string[];
  /**
  * Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. When using MirrorMaker2, it's necessary to add the bootstrap address's dns domain name of the target cluster to make it visible to the connector. For example: my-kafka-cluster.us-central1.managedkafka.my-project.cloud.goog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#dns_domain_names ManagedKafkaConnectCluster#dns_domain_names}
  */
  readonly dnsDomainNames?: string[];
  /**
  * VPC subnet to make available to the Kafka Connect cluster. Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}. It is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Kafka Connect cluster. The CIDR range of the subnet must be within the IPv4 address ranges for private networks, as specified in RFC 1918. The primary subnet CIDR range must have a minimum size of /22 (1024 addresses).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#primary_subnet ManagedKafkaConnectCluster#primary_subnet}
  */
  readonly primarySubnet: string;
}

export function managedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsToTerraform(struct?: ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalSubnets),
    dns_domain_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dnsDomainNames),
    primary_subnet: cdktn.stringToTerraform(struct!.primarySubnet),
  }
}


export function managedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsToHclTerraform(struct?: ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_domain_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dnsDomainNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_subnet: {
      value: cdktn.stringToHclTerraform(struct!.primarySubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSubnets = this._additionalSubnets;
    }
    if (this._dnsDomainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainNames = this._dnsDomainNames;
    }
    if (this._primarySubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySubnet = this._primarySubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalSubnets = undefined;
      this._dnsDomainNames = undefined;
      this._primarySubnet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalSubnets = value.additionalSubnets;
      this._dnsDomainNames = value.dnsDomainNames;
      this._primarySubnet = value.primarySubnet;
    }
  }

  // additional_subnets - computed: false, optional: true, required: false
  private _additionalSubnets?: string[]; 
  public get additionalSubnets() {
    return this.getListAttribute('additional_subnets');
  }
  public set additionalSubnets(value: string[]) {
    this._additionalSubnets = value;
  }
  public resetAdditionalSubnets() {
    this._additionalSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSubnetsInput() {
    return this._additionalSubnets;
  }

  // dns_domain_names - computed: false, optional: true, required: false
  private _dnsDomainNames?: string[]; 
  public get dnsDomainNames() {
    return this.getListAttribute('dns_domain_names');
  }
  public set dnsDomainNames(value: string[]) {
    this._dnsDomainNames = value;
  }
  public resetDnsDomainNames() {
    this._dnsDomainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainNamesInput() {
    return this._dnsDomainNames;
  }

  // primary_subnet - computed: false, optional: false, required: true
  private _primarySubnet?: string; 
  public get primarySubnet() {
    return this.getStringAttribute('primary_subnet');
  }
  public set primarySubnet(value: string) {
    this._primarySubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySubnetInput() {
    return this._primarySubnet;
  }
}

export class ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList extends cdktn.ComplexList {
  public internalValue? : ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[] | cdktn.IResolvable

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
  public get(index: number): ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference {
    return new ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedKafkaConnectClusterGcpConfigAccessConfig {
  /**
  * network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#network_configs ManagedKafkaConnectCluster#network_configs}
  */
  readonly networkConfigs: ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[] | cdktn.IResolvable;
}

export function managedKafkaConnectClusterGcpConfigAccessConfigToTerraform(struct?: ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference | ManagedKafkaConnectClusterGcpConfigAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_configs: cdktn.listMapper(managedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsToTerraform, true)(struct!.networkConfigs),
  }
}


export function managedKafkaConnectClusterGcpConfigAccessConfigToHclTerraform(struct?: ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference | ManagedKafkaConnectClusterGcpConfigAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_configs: {
      value: cdktn.listMapperHcl(managedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsToHclTerraform, true)(struct!.networkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedKafkaConnectClusterGcpConfigAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfigs = this._networkConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKafkaConnectClusterGcpConfigAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkConfigs.internalValue = value.networkConfigs;
    }
  }

  // network_configs - computed: false, optional: false, required: true
  private _networkConfigs = new ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList(this, "network_configs", false);
  public get networkConfigs() {
    return this._networkConfigs;
  }
  public putNetworkConfigs(value: ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[] | cdktn.IResolvable) {
    this._networkConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigsInput() {
    return this._networkConfigs.internalValue;
  }
}
export interface ManagedKafkaConnectClusterGcpConfig {
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#access_config ManagedKafkaConnectCluster#access_config}
  */
  readonly accessConfig: ManagedKafkaConnectClusterGcpConfigAccessConfig;
}

export function managedKafkaConnectClusterGcpConfigToTerraform(struct?: ManagedKafkaConnectClusterGcpConfigOutputReference | ManagedKafkaConnectClusterGcpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_config: managedKafkaConnectClusterGcpConfigAccessConfigToTerraform(struct!.accessConfig),
  }
}


export function managedKafkaConnectClusterGcpConfigToHclTerraform(struct?: ManagedKafkaConnectClusterGcpConfigOutputReference | ManagedKafkaConnectClusterGcpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_config: {
      value: managedKafkaConnectClusterGcpConfigAccessConfigToHclTerraform(struct!.accessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedKafkaConnectClusterGcpConfigAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKafkaConnectClusterGcpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedKafkaConnectClusterGcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKafkaConnectClusterGcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessConfig.internalValue = value.accessConfig;
    }
  }

  // access_config - computed: false, optional: false, required: true
  private _accessConfig = new ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: ManagedKafkaConnectClusterGcpConfigAccessConfig) {
    this._accessConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }
}
export interface ManagedKafkaConnectClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#create ManagedKafkaConnectCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#delete ManagedKafkaConnectCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#update ManagedKafkaConnectCluster#update}
  */
  readonly update?: string;
}

export function managedKafkaConnectClusterTimeoutsToTerraform(struct?: ManagedKafkaConnectClusterTimeouts | cdktn.IResolvable): any {
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


export function managedKafkaConnectClusterTimeoutsToHclTerraform(struct?: ManagedKafkaConnectClusterTimeouts | cdktn.IResolvable): any {
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

export class ManagedKafkaConnectClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedKafkaConnectClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ManagedKafkaConnectClusterTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster google_managed_kafka_connect_cluster}
*/
export class ManagedKafkaConnectCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_managed_kafka_connect_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ManagedKafkaConnectCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedKafkaConnectCluster to import
  * @param importFromId The id of the existing ManagedKafkaConnectCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedKafkaConnectCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_managed_kafka_connect_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster google_managed_kafka_connect_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedKafkaConnectClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedKafkaConnectClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_managed_kafka_connect_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.35.0',
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
    this._connectClusterId = config.connectClusterId;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._kafkaCluster = config.kafkaCluster;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._capacityConfig.internalValue = config.capacityConfig;
    this._gcpConfig.internalValue = config.gcpConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_cluster_id - computed: false, optional: false, required: true
  private _connectClusterId?: string; 
  public get connectClusterId() {
    return this.getStringAttribute('connect_cluster_id');
  }
  public set connectClusterId(value: string) {
    this._connectClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectClusterIdInput() {
    return this._connectClusterId;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster?: string; 
  public get kafkaCluster() {
    return this.getStringAttribute('kafka_cluster');
  }
  public set kafkaCluster(value: string) {
    this._kafkaCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // capacity_config - computed: false, optional: false, required: true
  private _capacityConfig = new ManagedKafkaConnectClusterCapacityConfigOutputReference(this, "capacity_config");
  public get capacityConfig() {
    return this._capacityConfig;
  }
  public putCapacityConfig(value: ManagedKafkaConnectClusterCapacityConfig) {
    this._capacityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityConfigInput() {
    return this._capacityConfig.internalValue;
  }

  // gcp_config - computed: false, optional: false, required: true
  private _gcpConfig = new ManagedKafkaConnectClusterGcpConfigOutputReference(this, "gcp_config");
  public get gcpConfig() {
    return this._gcpConfig;
  }
  public putGcpConfig(value: ManagedKafkaConnectClusterGcpConfig) {
    this._gcpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpConfigInput() {
    return this._gcpConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagedKafkaConnectClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagedKafkaConnectClusterTimeouts) {
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
      connect_cluster_id: cdktn.stringToTerraform(this._connectClusterId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      kafka_cluster: cdktn.stringToTerraform(this._kafkaCluster),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      capacity_config: managedKafkaConnectClusterCapacityConfigToTerraform(this._capacityConfig.internalValue),
      gcp_config: managedKafkaConnectClusterGcpConfigToTerraform(this._gcpConfig.internalValue),
      timeouts: managedKafkaConnectClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_cluster_id: {
        value: cdktn.stringToHclTerraform(this._connectClusterId),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_cluster: {
        value: cdktn.stringToHclTerraform(this._kafkaCluster),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_config: {
        value: managedKafkaConnectClusterCapacityConfigToHclTerraform(this._capacityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedKafkaConnectClusterCapacityConfigList",
      },
      gcp_config: {
        value: managedKafkaConnectClusterGcpConfigToHclTerraform(this._gcpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedKafkaConnectClusterGcpConfigList",
      },
      timeouts: {
        value: managedKafkaConnectClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedKafkaConnectClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
